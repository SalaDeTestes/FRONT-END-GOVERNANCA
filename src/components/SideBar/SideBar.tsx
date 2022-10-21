import style from './SideBar.module.scss';

const SideBar = () => {
  return (
    <>
      <nav className={style.sideBar}>
        <ul className={style.sideBarContainer}>
          <li className={style.containerLi}><a className={style.containerTab} href='/persons/register'>Pessoas</a></li>
          <li className={style.containerLi}><button className={style.containerTab}>Hardware</button></li>
          <ul className={style.dropDown} >
            <li className={style.dropDownLi}><a className={style.tabItem} href='/hardware/notebook/list' >Notebook</a></li>
            <li className={style.dropDownLi}><a className={style.tabItem} href='/hardware/desktop/register' >Desktop</a></li>
            <li className={style.dropDownLi}><a className={style.tabItem} href='/hardware/cellphone/register' >Celular</a></li>
            <li className={style.dropDownLi}><a className={style.tabItem} href='/hardware/chip/register' >Chip</a></li>
          </ul>
        </ul>
      </nav>
    </>
  )
}

export default SideBar;