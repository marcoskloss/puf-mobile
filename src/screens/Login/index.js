import * as React from 'react'
import { StatusBar } from 'react-native'

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
    return (
        <Screen p={2} justifyContent="center">
            <Logo flex={1} justifyContent="center" />
            <Box flex={2}>
                <Text textAlign="center" fontSize={6}>
                    Login
                </Text>
                <Form onSignupPress={() => console.warn('click!')} />
            </Box>
        </Screen>
    )
}
