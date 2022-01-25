import styled from 'styled-components/native'
import { View } from 'react-native'

import {
    background,
    margin,
    padding,
    flexbox,
} from '~/components/Theme/helpers'

export const Box = styled(View)`
    ${padding};
    ${background};
    ${margin};
    ${flexbox};
`
