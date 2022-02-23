import * as React from 'react'

import { Theme } from './components/Theme'
import { AuthProvider } from '~/modules'
import { App } from './screens'

export const Main = () => {
    return (
        <Theme>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Theme>
    )
}
