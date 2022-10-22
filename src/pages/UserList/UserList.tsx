import SearchBar from '../../components/List/SearchBar/SearchBar';
import List from '../../components/List/UserList/UserList';
import style from './UserList.module.scss'


function UserList() {
  return (
    <div className={style.listComponent}>
      <div className={style.headerContainer}>
        <h1 className={style.listTitle}>Pessoas</h1>
      </div>
      <SearchBar />
      <List />
    </div>
  )
}

export default UserList;