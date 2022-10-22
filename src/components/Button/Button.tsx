import React from 'react';
import style from './Button.module.scss';

interface IButton {
  children?: React.ReactNode
  href?: string
}

function Button({children, href}: IButton) {
  return (
    <a className={style.button} href={href} >{children}</a>
  )
}

export default Button;