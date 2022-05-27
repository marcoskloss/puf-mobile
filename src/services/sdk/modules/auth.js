import { fetch } from '../fetch'

export const login = async ({ password, email }) => {
    try {
        const res = await fetch.get('/login', {
            auth: { password, username: email },
        })

        return res.data
    } catch (err) {
        Promise.reject(err)
    }
}

export const signup = async ({ password, email, name }) => {
    const res = await fetch.post('/signup', { password, name, email })
    return res.data
}
