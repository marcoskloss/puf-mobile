import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

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
    const isLoggedIn = false
    return (
        <NavigationContainer>
            {isLoggedIn ? <LoggedInRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    )
}
