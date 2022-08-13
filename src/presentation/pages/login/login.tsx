import React from 'react'

import LoginHeader from '@/presentation/components/login-header/login-header'
import Spinner from '@/presentation/components/spinner/spinner'
import Footer from '@/presentation/components/footer/footer'

import Styles from './login-styles.scss'

export default function login (): React.ReactElement {
  return (
    <div className={Styles.login}>
      <LoginHeader />
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
      <Footer />
    </div>
  )
}
