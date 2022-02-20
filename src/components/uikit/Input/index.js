import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

import { th } from '~/components/Theme/helpers'

export const Input = styled(TextInput)`
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
