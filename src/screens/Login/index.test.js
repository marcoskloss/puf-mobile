import * as React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

import { Theme } from '../../components'
import { Login } from './'

const renderPage = () => {
    return render(
        <Theme>
            <Login />
        </Theme>
    )
}

test('should validate and show error in email field on blur', async () => {
    const screen = renderPage()

    const invalidEmail = 'foo'

    const emailInput = screen.getByText('E-mail')
    const submitBtn = screen.getByText('Entrar')

    fireEvent.changeText(emailInput, invalidEmail)
    fireEvent.press(submitBtn) // blur input field

    await waitFor(() => {
        expect(screen.getByText(/E-mail inválido/g)).toBeTruthy()
        expect(submitBtn).toBeDisabled()
    })
})

test('should validate and show error in password field on blur', async () => {
    const screen = renderPage()

    const invalidPassword = ''

    const passwordInput = screen.getByText('Senha')
    const submitBtn = screen.getByText('Entrar')

    fireEvent.changeText(passwordInput, invalidPassword)
    fireEvent.press(submitBtn) // blur input field

    await waitFor(() => {
        expect(screen.getByText(/Digite uma senha/g)).toBeTruthy()
        expect(submitBtn).toBeDisabled()
    })
})

test('should validate and show error in all fields on submit', async () => {
    const screen = renderPage()

    screen.getByText('Senha')
    screen.getByText('E-mail')
    const submitBtn = screen.getByText('Entrar')

    fireEvent.press(submitBtn)

    await waitFor(() => {
        expect(screen.getByText(/Informe o seu e-mail/g)).toBeTruthy()
        expect(screen.getByText(/Digite uma senha/g)).toBeTruthy()
        expect(submitBtn).toBeDisabled()
    })
})

test('should re-enable form button and hide errors when form is valid', async () => {
    const screen = renderPage()

    const passwordInput = screen.getByText('Senha')
    const emailInput = screen.getByText('E-mail')
    const submitBtn = screen.getByText('Entrar')

    const invalidEmail = 'foo.com'
    const invalidPassword = ''

    fireEvent.changeText(passwordInput, invalidPassword)
    fireEvent.changeText(emailInput, invalidEmail)
    fireEvent.press(submitBtn) // blur input field

    const validEmail = 'foo@mail.com'
    const validPassword = '123456'

    fireEvent.changeText(emailInput, validEmail)
    fireEvent.changeText(passwordInput, validPassword)

    await waitFor(() => {
        expect(screen.queryByText(/E-mail inválido/g)).not.toBeTruthy()
        expect(screen.queryByText(/Digite uma senha/g)).not.toBeTruthy()
        expect(submitBtn).not.toBeDisabled()
    })
})
