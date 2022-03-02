import { fetch } from '~/services/sdk'

export const login = async ({ password, username }) => {
    try {
        const res = await fetch.get('/login', {
            auth: { password, username },
        })

        return res.data
    } catch (err) {
        Promise.reject(err)
    }
}
