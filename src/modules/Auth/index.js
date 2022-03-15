import { useStorage } from '~/modules/Storage'

export const useAuth = () => {
    const [state, setState] = useStorage()

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

    return [state?.auth || {}, { login, logout }]
}
