import * as React from 'react'
import { render } from '@testing-library/react-native'

import { App } from './'
import { AuthProvider } from '~/modules'
import { Theme } from '~/components'

test('should show login form', () => {
    const screen = render(
        <Theme>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Theme>
    )

    screen.debug()

    const emailInput = screen.getByText('E-mail')
    const passwordInput = screen.getByText('Senha')
    const submitBtn = screen.getByText('Entrar')
    const signupLink = screen.getByText('Cadastre-se!')

    expect(emailInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
    expect(submitBtn).toBeTruthy()
    expect(signupLink).toBeTruthy()
})
