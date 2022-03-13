import * as React from 'react'
import { login } from '~/services/sdk'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

import { App } from './'
import { StorageProvider } from '~/modules'
import { asyncAdapter } from '~/modules/Storage/persistence-adapters/async-adapter'
import { Theme } from '~/components'

jest.mock('axios')
jest.mock('~/services/sdk')

const renderPage = () => {
    return render(
        <Theme>
            <StorageProvider persistenceAdapter={asyncAdapter}>
                <App />
            </StorageProvider>
        </Theme>
    )
}

beforeEach(async () => {
    await asyncAdapter.clear()
})

test('should show login form', () => {
    const screen = renderPage()

    const emailInput = screen.getByText('E-mail')
    const passwordInput = screen.getByText('Senha')
    const submitBtn = screen.getByText('Entrar')
    const signupLink = screen.getByText('Cadastre-se!')

    expect(emailInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
    expect(submitBtn).toBeTruthy()
    expect(signupLink).toBeTruthy()
})

test('should log in when submitting the form with correct credentials', async () => {
    const credentials = {
        email: 'user@email.com',
        password: '123456',
    }

    const responseData = {
        user: {
            id: 1,
            email: credentials.email,
            name: 'User',
        },
        token: 'somestringasdasdasd',
    }

    login.mockImplementation(() => {
        return Promise.resolve(responseData)
    })

    const screen = renderPage()

    const emailInput = screen.getByText('E-mail')
    const passwordInput = screen.getByText('Senha')
    const submitBtn = screen.getByText('Entrar')

    fireEvent.changeText(emailInput, credentials.email)
    fireEvent.changeText(passwordInput, credentials.password)
    fireEvent.press(submitBtn)

    await waitFor(() => expect(submitBtn).toBeDisabled())

    expect(login).toHaveBeenCalledWith({
        username: credentials.email,
        password: credentials.password,
    })

    const username = screen.getByText(/Olá!/g)
    expect(username).toBeTruthy()
})

test('should not log in user when submitting the form with wrong credentials', async () => {
    const credentials = {
        email: 'foo@mail.com',
        password: '123456',
    }

    login.mockImplementation(() => Promise.reject())

    const screen = renderPage()

    const emailInput = screen.getByText('E-mail')
    const passwordInput = screen.getByText('Senha')
    const submitBtn = screen.getByText('Entrar')

    fireEvent.changeText(emailInput, credentials.email)
    fireEvent.changeText(passwordInput, credentials.password)
    fireEvent.press(submitBtn)

    await waitFor(() => expect(submitBtn).toBeDisabled())

    expect(login).toHaveBeenCalledWith({
        password: credentials.password,
        username: credentials.email,
    })

    expect(submitBtn).toBeEnabled()
    expect(screen.getByText('Entrar')).toBeTruthy()
})
