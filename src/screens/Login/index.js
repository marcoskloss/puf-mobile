import * as React from 'react'
import { StatusBar, Alert } from 'react-native'

import { login } from '~/services/sdk'
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

    const onSubmit = async values => {
        try {
            const { user, token } = await login(values)
            setAuth({ user, token })
        } catch (error) {
            Alert.alert('Erro ao fazer login', error.response.data.error)
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
                    onSignupPress={() => console.warn('click!')}
                />
            </Box>
        </Screen>
    )
}
