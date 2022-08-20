
import React, { useContext } from 'react'

import Context from '@/presentation/contexts/form/form-context'

import Spinner from '@/presentation/components/spinner/spinner'

import Styles from './form-status-styles.scss'

const FormStatus: React.FC = () => {
  const { state: { isLoading }, errorState: { main } } = useContext(Context)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      {main && <span className={Styles.error}>{main}</span>}
    </div>

  )
}

export default FormStatus
