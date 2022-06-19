import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { th, margin } from '../../Theme'
import { Text } from '../../uikit/Text'

const StyledButton = styled(TouchableOpacity)`
    background: ${th.color('white')};
    border: none;
    border-radius: 200px;
    color: ${th.color('black')};
    padding: ${th.space(2)}px ${th.space(8)}px;
    align-items: center;
    align-self: center;

    ${margin}
    ${({ disabled }) => disabled && 'opacity: 0.5;'}
`

export const Button = ({
    label,
    color = 'black',
    disabled,
    loading,
    children,
    ...props
}) => (
    <StyledButton {...props} disabled={disabled || loading}>
        {/* {loading ? <Spinner /> : children}  */}
        <Text color={color}>{label}</Text>
        {children}
    </StyledButton>
)
