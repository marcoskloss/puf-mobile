import AsyncStorage from '@react-native-async-storage/async-storage'

const AUTH_KEY = '@puf:auth'

export const asyncAdapter = {
    getItem: async () => {
        try {
            const data = await AsyncStorage.getItem(AUTH_KEY)
            return data && JSON.parse(data)
        } catch (err) {
            return Promise.reject(err)
        }
    },

    setItem: async value => {
        AsyncStorage.setItem(AUTH_KEY, value && JSON.stringify(value))
    },

    clear: async () => {
        AsyncStorage.clear()
    },
}
