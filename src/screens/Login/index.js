import * as React from 'react'
import { StatusBar, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { login } from '~/services/sdk'
import { handleApiError } from '../../services/sdk/fetch'
import { useAuth } from '~/modules'

import { Box, SafeArea, Logo, Text } from '~/components'
import { Form } from './Form'

const Screen = ({
    children,
    bg = 'rasinBlack',
    barStyle = 'light-content',
    ...props
}) => {
    return (
        <SafeArea flex={1} bg={bg}>
            <StatusBar barStyle={barStyle} />
            <Box {...props} flex={1}>
                {children}
            </Box>
        </SafeArea>
    )
}

export const Login = () => {
    const [, { login: setAuth }] = useAuth()
    const { navigate } = useNavigation()

    const onSubmit = async values => {
        try {
            const { user, token } = await login(values)
            setAuth({ user, token })
        } catch (error) {
            const msg = handleApiError(error)
            Alert.alert('Erro ao fazer login', msg)
        }
    }

    return (
        <Screen p={2} justifyContent="center">
            <Logo flex={1} justifyContent="center" />
            <Box flex={2}>
                <Text textAlign="center" fontSize={6}>
                    Login
                </Text>
                <Form
                    onSubmit={onSubmit}
                    onSignupPress={() => navigate('/signup')}
                />
            </Box>
        </Screen>
    )
}
