import Button from '../../Button/Button';
import style from './SearchBar.module.scss';

function SearchBar() {
  return (
    <div className={style.filterContainer}>
      {/*Componentizar*/}
      <input
        className={style.searchBar}
        type="text"
        id="header-search"
        placeholder="" 
      />
      <div className={style.buttonsContainer}>
        <Button>Visualizar</Button>
        <Button href='./register'>Adicionar</Button>
      </div>
    </div>
  )
}

export default SearchBar;