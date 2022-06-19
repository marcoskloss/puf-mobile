import { DrawerContentScrollView } from '@react-navigation/drawer'
import * as React from 'react'

import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Box } from '../Box'

const SMenuItem = styled(Box)`
    border-bottom-color: ${props => props.theme.colors.line};
    border-bottom-width: 1px;
    margin-bottom: 16px;
`

const MenuItem = ({ children, onPress, ...props }) => (
    <TouchableOpacity onPress={onPress}>
        <SMenuItem {...props}>{children}</SMenuItem>
    </TouchableOpacity>
)

export const Menu = ({ descriptors, navigation }) => {
    return (
        <DrawerContentScrollView>
            <Box>
                {Object.values(descriptors).map(item => (
                    <MenuItem
                        key={item.route.key}
                        onPress={() => navigation.navigate(item.route.name)}>
                        {item.options.drawerIcon()}
                    </MenuItem>
                ))}
            </Box>
        </DrawerContentScrollView>
    )
}
