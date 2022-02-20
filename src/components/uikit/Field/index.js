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
    label,
    textContentType,
    onChangeText,
    error,
    placeholderColor,
    ...props
}) => (
    <Box>
        <Label>{label}</Label>
        <Input
            textContentType={textContentType}
            onChangeText={onChangeText}
            hasError={!!error}
            placeholderColor={placeholderColor}
            {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
)
