import * as React from 'react'

import { Theme } from './components/Theme'
import { onRehydrateAuthMiddleware, StorageProvider } from './modules'
import { asyncAdapter } from './modules/Storage/persistence-adapters/async-adapter'
import { App } from './screens'

export const Main = () => {
    return (
        <Theme>
            <StorageProvider
                persistenceAdapter={asyncAdapter}
                onRehydrate={onRehydrateAuthMiddleware}>
                <App />
            </StorageProvider>
        </Theme>
    )
}
