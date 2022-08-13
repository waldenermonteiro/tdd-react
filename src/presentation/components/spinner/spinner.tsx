import React from 'react'

import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>;

export default function Spinner (props: Props): React.ReactElement {
  return (
    <div {...props} className={[Styles.spinner, props.className].join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
