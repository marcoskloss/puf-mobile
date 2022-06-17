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
