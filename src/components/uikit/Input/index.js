import * as React from 'react'
import { TextInput } from 'react-native'
import styled, { css, useTheme } from 'styled-components/native'

import { th } from '~/components/Theme/helpers'

const StyledInput = styled(TextInput)`
    background: transparent;
    border: 1px solid #fff;
    border-radius: 200px;
    color: ${th.color('white')};
    padding: ${th.space(2)}px ${th.space(3)}px;

    ${({ disabled }) => disabled && 'opacity: 0.5;'}
    ${({ hasError }) =>
        hasError &&
        css`
            border-color: ${th.color('red')};
        `}
`

export const Input = ({ placeholderColor = 'gray', ...props }) => {
    const theme = useTheme()
    const placeholderTextColor = th.color(placeholderColor)({ theme })

    return (
        <StyledInput {...props} placeholderTextColor={placeholderTextColor} />
    )
}
