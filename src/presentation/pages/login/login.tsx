import React from 'react'

import LoginHeader from '@/presentation/components/login-header/login-header'
import Input from '@/presentation/components/input/input'
import Footer from '@/presentation/components/footer/footer'
import FormStatus from '@/presentation/components/form-status/form-status'

import Styles from './login-styles.scss'

export default function login (): React.ReactElement {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form action="" className={Styles.form}>
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
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}
