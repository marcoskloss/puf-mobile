import * as React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext([{}, () => {}])
const AUTH_KEY = '@puf:auth'

export const useAuth = () => {
    const [state, setState] = useContext(AuthContext)

    const logout = () => setState(false)
    return [state, { login: setState, logout }]
}

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({})

    const setData = state =>
        AsyncStorage.setItem(AUTH_KEY, state && JSON.stringify(state))

    const getData = async () => {
        const data = await AsyncStorage.getItem(AUTH_KEY)
        if (data !== null) {
            setState(JSON.stringify(data))
        }
    }

    useEffect(() => {
        setData(state)
    }, [state])

    useEffect(() => {
        getData()
    }, [])

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
}
