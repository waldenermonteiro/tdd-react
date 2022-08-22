import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'

import { faker } from '@faker-js/faker'

import { ValidationSpy } from '@/presentation/test'

import Login from './login'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

type SutProps = {
  validationError: string
}

const makeSut = (params?: SutProps): SutTypes => {
  const validationSpy = new ValidationSpy()
  validationSpy.errorMessage = params?.validationError

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
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })

    const errorWrap = sut.getByTestId('error-wrap')

    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    expect(submitButton.disabled).toBeTruthy()

    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationError)

    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(validationError)
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

  test('should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })

    const emailInput = sut.getByTestId('email')
    const fakeEmail = faker.internet.email()

    fireEvent.input(emailInput, { target: { value: fakeEmail } })

    const emailStatus = sut.getByTestId('email-status')

    expect(emailStatus.title).toBe(validationError)
    expect(emailStatus.textContent).toBe('🔴')
  })

  test('should show password error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })

    const passwordInput = sut.getByTestId('password')
    const fakePassword = faker.internet.password()

    fireEvent.input(passwordInput, { target: { value: fakePassword } })

    const passwordStatus = sut.getByTestId('password-status')

    expect(passwordStatus.title).toBe(validationError)
    expect(passwordStatus.textContent).toBe('🔴')
  })

  test('should show valid email if Validation succeeds', () => {
    const { sut } = makeSut()

    const emailInput = sut.getByTestId('email')
    const fakeEmail = faker.internet.email()

    fireEvent.input(emailInput, { target: { value: fakeEmail } })

    const emailStatus = sut.getByTestId('email-status')

    expect(emailStatus.title).toBe('Tudo Certo!')
    expect(emailStatus.textContent).toBe('🟢')
  })

  test('should show valid password state if Validation succeeds', () => {
    const { sut } = makeSut()

    const passwordInput = sut.getByTestId('password')
    const fakePassword = faker.internet.password()

    fireEvent.input(passwordInput, { target: { value: fakePassword } })

    const passwordStatus = sut.getByTestId('password-status')

    expect(passwordStatus.title).toBe('Tudo Certo!')
    expect(passwordStatus.textContent).toBe('🟢')
  })

  test('should enable submit button if form is valid', () => {
    const { sut } = makeSut()

    const emailInput = sut.getByTestId('email')
    const fakeEmail = faker.internet.email()

    const passwordInput = sut.getByTestId('password')
    const fakePassword = faker.internet.password()

    fireEvent.input(emailInput, { target: { value: fakeEmail } })
    fireEvent.input(passwordInput, { target: { value: fakePassword } })

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    expect(submitButton.disabled).toBeFalsy()
  })

  test('should show spinner on submit', () => {
    const { sut } = makeSut()

    const emailInput = sut.getByTestId('email')
    const fakeEmail = faker.internet.email()

    const passwordInput = sut.getByTestId('password')
    const fakePassword = faker.internet.password()

    fireEvent.input(emailInput, { target: { value: fakeEmail } })
    fireEvent.input(passwordInput, { target: { value: fakePassword } })

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    fireEvent.click(submitButton)

    const spinner = sut.getByTestId('spinner')

    expect(spinner).toBeTruthy()
  })
})
