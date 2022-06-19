import * as React from 'react'
import { StatusBar, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { handleApiError } from '../../services/sdk/fetch'
import { Form } from './Form'
import { signup } from '../../services/sdk'
import { useAuth } from '../../modules'

import { Box, SafeArea, Logo, Text } from '../../components'

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

export const Signup = () => {
    const [, { login: setAuth }] = useAuth()
    const { navigate } = useNavigation()

    const onSubmit = async values => {
        try {
            const { user, token } = await signup(values)
            setAuth({ user, token })
            navigate('/dash')
        } catch (error) {
            const msg = handleApiError(error)
            Alert.alert('Erro ao cadastrar', msg)
        }
    }

    return (
        <Screen p={2} justifyContent="center">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, paddingBottom: 50 }}>
                <Logo flex={1} justifyContent="center" />
                <Box flex={2}>
                    <Text textAlign="center" fontSize={6}>
                        Registrar
                    </Text>
                    <Form
                        onSubmit={onSubmit}
                        onGoToLogin={() => navigate('/login')}
                    />
                </Box>
            </KeyboardAvoidingView>
        </Screen>
    )
}
