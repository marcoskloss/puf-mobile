import * as React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext([{}, () => {}])
const AUTH_KEY = '@puf:auth'

export const useAuth = () => {
    const [state, setState] = useContext(AuthContext)

    const logout = () =>
        setState(prevState => ({
            ...prevState,
            auth: {},
        }))

    const login = auth =>
        setState(prevState => ({
            ...prevState,
            rehydrated: true,
            auth,
        }))

    return [state, { login, logout }]
}

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({ auth: {}, rehydrated: false })

    const setData = async value => {
        await AsyncStorage.setItem(AUTH_KEY, value && JSON.stringify(value))
    }

    const getData = async () => {
        const data = await AsyncStorage.getItem(AUTH_KEY)

        if (data !== null) {
            setState({ ...JSON.parse(data) })
        }
    }

    useEffect(() => {
        state?.rehydrated && setData(state)
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
