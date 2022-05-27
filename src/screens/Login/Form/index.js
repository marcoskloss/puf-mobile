import * as React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Field, Box, Button, Text } from '../../../components'

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('E-mail inválido')
        .required('Informe o seu e-mail'),
    password: yup.string().required('Digite uma senha'),
})

export const Form = ({ onSubmit, onGoToSignup }) => {
    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        errors,
        touched,
        isValid,
    } = useFormik({
        onSubmit,
        validationSchema,
        initialValues: {
            email: '',
            password: '',
        },
    })

    return (
        <>
            <Field
                type="text"
                name="email"
                label="E-mail"
                placeholder="Digite o seu e-mail"
                value={values.email}
                disabled={isSubmitting}
                error={touched.email && errors.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                mb={3}
            />
            <Field
                type="password"
                name="password"
                label="Senha"
                placeholder="Digite a sua senha"
                secureTextEntry
                value={values.password}
                disabled={isSubmitting}
                error={touched.password && errors.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                mb={3}
            />

            <Box center mt={3}>
                <Button
                    label="Entrar"
                    disabled={!isValid}
                    onPress={handleSubmit}
                    loading={isSubmitting}
                />

                <Box fontSize={1} color="gray" mt={4}>
                    <Text textAlign="center">
                        Não possui cadastro?{' '}
                        <Text
                            fontWeight="bold"
                            color="gray"
                            onPress={onGoToSignup}>
                            Cadastre-se!
                        </Text>
                    </Text>
                </Box>
            </Box>
        </>
    )
}
