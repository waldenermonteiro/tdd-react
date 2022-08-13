
import React from 'react'

import Spinner from '@/presentation/components/spinner/spinner'

import Styles from './form-status-styles.scss'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const FormStatus: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Error</span>
    </div>

  )
}

export default FormStatus
