import * as React from 'react'
import { StatusBar } from 'react-native'

import { Box, SafeArea, Text } from '~/components'

const Screen = ({
    children,
    bg = 'raisinBlack',
    barStyle = 'light-content',
}) => (
    <SafeArea style={{ flex: 1, backgroundColor: bg }}>
        <StatusBar barStyle={barStyle} />
        {children}
    </SafeArea>
)

export const App = () => {
    return (
        <Screen>
            <Box bg="rasinBlack" flex={1}>
                <Text>Alou aloy</Text>
            </Box>
        </Screen>
    )
}
