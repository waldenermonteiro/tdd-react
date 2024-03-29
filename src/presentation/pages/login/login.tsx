/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect } from 'react'

import { Authentication } from '@/domain/usecases'

import {
  LoginHeader,
  Input,
  Footer,
  FormStatus
} from '@/presentation/components/'

import Context from '@/presentation/contexts/form/form-context'

import { Validation } from '@/presentation/protocols/validation'

import Styles from './login-styles.scss'

type Props = {
  validation?: Validation
  authentication?: Authentication
};

export default function login ({
  validation,
  authentication
}: Props): React.ReactElement {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState((oldState) => ({
      ...oldState,
      emailError: validation.validate('email', state.email)
    }))
  }, [state.email])

  useEffect(() => {
    setState((oldState) => ({
      ...oldState,
      passwordError: validation.validate('password', state.password)
    }))
  }, [state.password])

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    if (state.isLoading) {
      return
    }

    setState((oldState) => ({
      ...oldState,
      isLoading: true
    }))

    await authentication.auth({
      email: state.email,
      password: state.password
    })
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form action="" className={Styles.form} onSubmit={async (event) => await handleSubmit(event)}>
          <h2>Login</h2>
          <Input
            type="email"
            name="email"
            id=""
            placeholder="Digite seu e-mail"
          />
          <Input
            type="password"
            name="password"
            id=""
            placeholder="Digite sua senha"
          />
          <button
            data-testid="submit"
            disabled={!!state.emailError || !!state.passwordError}
            className={Styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}
