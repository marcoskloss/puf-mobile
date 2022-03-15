import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '~/modules'
import { Login } from './Login'
import { Dashboard } from './Dashboard'

const Stack = createNativeStackNavigator()

const PublicRoutes = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/login" component={Login} />
    </Stack.Navigator>
)
const LoggedInRoutes = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/dash" component={Dashboard} />
    </Stack.Navigator>
)

export const App = () => {
    const [auth] = useAuth()
    return (
        <NavigationContainer>
            {auth?.user ? <LoggedInRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    )
}
