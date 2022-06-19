import * as React from 'react'
import { StatusBar, Alert, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { handleApiError } from '../../services/sdk/fetch'
import { login } from '../../services/sdk'
import { useAuth } from '../../modules'

import { Box, SafeArea, Logo, Text } from '../../components'
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
            <View>
                <Box flex={2}>
                    <Text textAlign="center" fontSize={6}>
                        Login
                    </Text>
                    <Form
                        onSubmit={onSubmit}
                        onGoToSignup={() => navigate('/signup')}
                    />
                </Box>
            </View>
        </Screen>
    )
}
