import axios from 'axios'

const endpoints = {
    production: '',
}

const baseURL =
    endpoints?.[process.env.API_ENV] ||
    process.env.CUSTOM_URL ||
    endpoints.production

console.log(process.env)

export const fetch = axios.create({ baseURL })
