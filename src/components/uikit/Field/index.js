import * as React from 'react'
import styled from 'styled-components/native'

import { th } from '../../Theme'
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
    secureTextEntry,
    name,
    label,
    value,
    error,
    placeholder,
    placeholderColor,
    disabled,
    onChangeText,
    onBlur,
    ...props
}) => (
    <Box {...props}>
        <Label>{label}</Label>
        <Input
            value={value}
            name={name}
            textContentType={textContentType}
            onChangeText={onChangeText}
            hasError={!!error}
            placeholderColor={placeholderColor}
            placeholder={placeholder}
            disabled={disabled}
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
)
