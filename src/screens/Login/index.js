import * as React from 'react'
import { StatusBar } from 'react-native'

import { Box, SafeArea } from '~/components'
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
        <Screen p={2}>
            <Form />
        </Screen>
    )
}
