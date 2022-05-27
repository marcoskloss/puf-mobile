import axios from 'axios'

const endpoints = {
    production: '',
}

const baseURL =
    endpoints?.[process.env.API_ENV] ||
    process.env.CUSTOM_URL ||
    endpoints.production

export const setToken = token => {
    fetch.defaults.headers.Authorization = token ? `Bearer ${token}` : token
}

export const fetch = axios.create({ baseURL })
