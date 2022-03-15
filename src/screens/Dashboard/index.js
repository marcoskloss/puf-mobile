import * as React from 'react'
import { StatusBar } from 'react-native'

import { Box, SafeArea, Text, Button } from '~/components'
import { useAuth } from '~/modules'

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

export const Dashboard = () => {
    const [{ user }, { logout }] = useAuth()

    return (
        <Screen>
            <Box>
                <Text>Olá! {JSON.stringify(user)}</Text>
                <Button label="Sair" onPress={logout} />
            </Box>
        </Screen>
    )
}
