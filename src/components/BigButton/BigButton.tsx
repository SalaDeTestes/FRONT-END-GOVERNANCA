import React from 'react';
import style from './BigButton.module.scss';

interface IButton {
  children?: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
}

function loadPage(){
  
}

const Button = ({children}: IButton) => {
  return (
    <button className={style.bigButton} onClick={loadPage}>{children}</button>
  )
}

export default Button;