import styled from 'styled-components/native'
import { Text as BaseText } from 'react-native'

import {
    background,
    margin,
    padding,
    font,
    th,
} from '~/components/Theme/helpers'

export const Text = styled(BaseText)`
    color: ${th.color('white')} ${padding};
    ${background};
    ${margin};
    ${font};
`
