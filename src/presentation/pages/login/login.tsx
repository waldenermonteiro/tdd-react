import React from 'react'

import Logo from '@/presentation/components/logo/logo'
import Spinner from '@/presentation/components/spinner/spinner'

import Styles from './login-styles.scss'

export default function login (): React.ReactElement {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Digite seu e-mail"
          />
          <span className={Styles.inputStatus}></span>
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Digite sua senha"
          />
          <span className={Styles.inputStatus}></span>
        </div>

        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  )
}
