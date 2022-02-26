import * as React from 'react'
import axios from 'axios'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { App } from './'
import { AuthProvider } from '~/modules'
import { Theme } from '~/components'

jest.mock('axios')

const renderPage = () => {
    return render(
        <Theme>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Theme>
    )
}

beforeEach(async () => {
    await AsyncStorage.clear()
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

    axios.get.mockImplementation(() => {
        return Promise.resolve({ data: responseData })
    })

    const screen = renderPage()

    const emailInput = screen.getByText('E-mail')
    const passwordInput = screen.getByText('Senha')
    const submitBtn = screen.getByText('Entrar')

    fireEvent.changeText(emailInput, credentials.email)
    fireEvent.changeText(passwordInput, credentials.password)
    fireEvent.press(submitBtn)

    await waitFor(() => expect(submitBtn).toBeDisabled())

    expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/login/g), {
        auth: {
            username: credentials.email,
            password: credentials.password,
        },
    })

    const username = screen.getByText(/Olá!/g)
    expect(username).toBeTruthy()
})

test('should not log in user when submitting the form with wrong credentials', async () => {
    const credentials = {
        email: 'foo@mail.com',
        password: '123456',
    }

    axios.get.mockImplementation(() => Promise.reject())

    const screen = renderPage()

    const emailInput = screen.getByText('E-mail')
    const passwordInput = screen.getByText('Senha')
    const submitBtn = screen.getByText('Entrar')

    fireEvent.changeText(emailInput, credentials.email)
    fireEvent.changeText(passwordInput, credentials.password)
    fireEvent.press(submitBtn)

    await waitFor(() => expect(submitBtn).toBeDisabled())

    expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/login/g), {
        auth: { password: credentials.password, username: credentials.email },
    })

    expect(submitBtn).toBeEnabled()
    expect(screen.getByText('Entrar'))
})
