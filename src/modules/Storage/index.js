import * as React from 'react'
import { useCallback } from 'react'
import { createContext, useState, useEffect, useContext } from 'react'

const MemoryStorageContext = createContext([{}, () => ({})])

const MemoryStorageProvider = ({ initialState = {}, children }) => {
    const [state, setState] = useState(initialState)

    return (
        <MemoryStorageContext.Provider value={[state, setState]}>
            {children}
        </MemoryStorageContext.Provider>
    )
}

export const PersistenceProvider = ({
    children,
    onRehydrate,
    persistenceAdapter,
}) => {
    const [state, setState] = useContext(MemoryStorageContext)

    const rehydrate = useCallback(async () => {
        const result = await persistenceAdapter.getItem()
        const data = onRehydrate(result)
        setState({ ...data, rehydrated: true })
    }, [persistenceAdapter, setState, onRehydrate])

    useEffect(() => {
        rehydrate()
    }, [rehydrate])

    useEffect(() => {
        state?.rehydrated && persistenceAdapter.setItem(state)
    }, [state, persistenceAdapter])

    return children
}

export const StorageProvider = ({
    persistenceAdapter,
    children,
    onRehydrate,
}) => {
    const initialState = { rehydrated: false }

    return (
        <MemoryStorageProvider initialState={initialState}>
            <PersistenceProvider
                persistenceAdapter={persistenceAdapter}
                onRehydrate={onRehydrate}>
                {children}
            </PersistenceProvider>
        </MemoryStorageProvider>
    )
}

export const useStorage = () => {
    const [state, setState] = useContext(MemoryStorageContext)
    return [state, setState]
}
