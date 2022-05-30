import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../modules'
import { Dashboard } from './Dashboard'
import { Signup } from './Signup'
import { Login } from './Login'
import { Icon, Menu } from '../components'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const PublicRoutes = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/login" component={Login} />
        <Stack.Screen name="/signup" component={Signup} />
    </Stack.Navigator>
)
const LoggedInRoutes = () => (
    <Drawer.Navigator
        drawerContent={props => <Menu {...props} />}
        screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: '#000',
                maxWidth: 80,
                alignItems: 'center',
            },
        }}>
        <Drawer.Screen
            name="/dash"
            component={Dashboard}
            options={{
                drawerIcon: () => <Icon name="dashboard" />,
            }}
        />
    </Drawer.Navigator>
)

export const App = () => {
    const [auth] = useAuth()
    return (
        <NavigationContainer>
            {auth?.user ? <LoggedInRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    )
}
