import axios from 'axios';
import { useEffect } from 'react';
import List from '../../components/List/List'
import SideBar from '../../components/SideBar/SideBar';
import style from './UserList.module.scss'

function UserList() {
  useEffect(() => {
    axios.get('http://192.168.228.4:8080/pessoas')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <SideBar/>
      <List />
    </>
  )
}

export default UserList;