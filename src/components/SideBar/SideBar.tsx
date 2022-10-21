import style from './SideBar.module.scss';

const SideBar = () => {
  return (
    <>
      <nav className={style.sideBar}>
        <ul className={style.sideBarContainer}>
          <li className={style.containerLi}><a className={style.containerTab} href='/user/list'>Pessoas</a></li>
          <li className={style.containerLi}><button className={style.containerTab}>Hardware</button></li>
          <ul className={style.dropDown} >
            <li className={style.dropDownLi}><a className={style.tabItem} href='/hardware/notebook/list' >Notebook</a></li>
            <li className={style.dropDownLi}><a className={style.tabItem} href='/hardware/desktop/list' >Desktop</a></li>
            <li className={style.dropDownLi}><a className={style.tabItem} href='/hardware/cellphone/list' >Celular</a></li>
            <li className={style.dropDownLi}><a className={style.tabItem} href='/hardware/chip/list' >Chip</a></li>
          </ul>
        </ul>
      </nav>
    </>
  )
}

export default SideBar;