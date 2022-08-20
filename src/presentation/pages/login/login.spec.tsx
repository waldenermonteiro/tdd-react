import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'

import { faker } from '@faker-js/faker'

import { ValidationSpy } from '@/presentation/test'

import Login from './login'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)

  return {
    sut,
    validationSpy
  }
}

describe('Login Component', () => {
  afterEach(() => {
    cleanup()
  })
  test('should start with initial state', () => {
    const { sut } = makeSut()

    const errorWrap = sut.getByTestId('error-wrap')

    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    expect(submitButton.disabled).toBeTruthy()

    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')

    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
  })

  test('should call Validation with correct email value', () => {
    const { sut, validationSpy } = makeSut()

    const emailInput = sut.getByTestId('email')

    const fakeEmail = faker.internet.email()

    fireEvent.input(emailInput, { target: { value: fakeEmail } })

    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe(fakeEmail)
  })

  test('should call Validation with correct password value', () => {
    const { sut, validationSpy } = makeSut()

    const passwordInput = sut.getByTestId('password')

    const fakePassword = faker.internet.password()

    fireEvent.input(passwordInput, { target: { value: fakePassword } })

    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe(fakePassword)
  })
})
