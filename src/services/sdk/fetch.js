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

const DEFAULT_ERROR_MESSAGE = 'Eita! Um erro interno aconteceu.'
export const handleApiError = axiosError => {
    if (axiosError?.response) {
        return axiosError.response?.data?.error || DEFAULT_ERROR_MESSAGE
    }
    console.log('handleApiError get an internal server error', axiosError)
    return DEFAULT_ERROR_MESSAGE
}
