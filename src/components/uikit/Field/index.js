import * as React from 'react'
import styled from 'styled-components/native'

import { th } from '~/components/Theme'
import { Box } from '../Box'
import { Input } from '../Input'
import { Label } from '../Label'
import { Text } from '../Text'

const ErrorMessage = styled(Text)`
    color: ${th.color('red')};
    padding: ${th.space(1)}px ${th.space(3)}px;
    font-size: ${th.size(2)}px;
`

export const Field = ({
    textContentType,
    name,
    label,
    placeholder,
    value,
    error,
    disabled,
    onChangeText,
    onBlur,
    ...props
}) => (
    <Box {...props}>
        <Label>{label}</Label>
        <Input
            textContentType={textContentType}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChangeText={onChangeText}
            onBlur={onBlur}
            hasError={!!error}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
)
