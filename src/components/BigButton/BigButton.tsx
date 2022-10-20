import React from 'react';
import style from './BigButton.module.scss';

interface IButton {
  children?: React.ReactNode
  href?: string
}

const Button = ({children, href}: IButton) => {
  return (
    <a className={style.bigButton} href={href} >{children}</a>
  )
}

export default Button;