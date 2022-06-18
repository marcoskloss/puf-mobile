import { fetch } from '../fetch'

export const login = async ({ password, username }) => {
    try {
        const res = await fetch.get('/login', {
            auth: { password, username },
        })
        return res.data
    } catch (err) {
        console.log('login error', err)
        throw err
    }
}

export const signup = async ({ password, name, email }) => {
    try {
        const res = await fetch.post('/signup', { name, email, password })
        return res.data
    } catch (err) {
        console.log('signup error', err)
        throw err
    }
}
