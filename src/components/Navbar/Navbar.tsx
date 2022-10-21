import React from 'react';
import style from './Navbar.module.scss';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className={style.navBar}>
      <div className={style.navContainer}>
        <a className={style.logo} rel="home" href="/">
          <img className={style.logoImage} src={logo} alt="" />
          <h1 className={style.logoText}>CANTO GOVERNANÇA</h1>
        </a>
        <span className={style.blankspace}></span>
      </div>
    </nav>
  )
}

export default Navbar;