import * as React from 'react'
import { StatusBar } from 'react-native'

import { Box, SafeArea, Text } from '~/components'

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

export const Dashboard = () => (
    <Screen>
        <Box>
            <Text>Olá!</Text>
        </Box>
    </Screen>
)
