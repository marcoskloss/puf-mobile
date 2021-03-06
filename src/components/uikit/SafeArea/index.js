import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

import { background, margin, padding, flexbox } from '../../Theme/helpers'

export const SafeArea = styled(SafeAreaView)`
    ${padding};
    ${background};
    ${margin};
    ${flexbox};
`
