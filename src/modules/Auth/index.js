import * as React from 'react'
import { useContext, createContext, useState, useEffect, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext([{}, () => {}])
const AUTH_KEY = '@puf:auth'

export const useAuth = () => {
    const [state, setState] = useContext(AuthContext)

    const logout = () => setState({})
    return [state, { login: setState, logout }]
}

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({})
    const isFirstRender = useRef(true)

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
        !isFirstRender.current && setData(state)
    }, [state])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        }

        getData()
    }, [])

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
}
