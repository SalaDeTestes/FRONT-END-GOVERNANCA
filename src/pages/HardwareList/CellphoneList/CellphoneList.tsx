import axios from 'axios';
import { useEffect } from 'react';
import List from '../../../components/List/List'
import SideBar from '../../../components/SideBar/SideBar';
import style from './CellphoneList.module.scss'

function CellphoneList() {
  useEffect(() => {
    axios.get('http://192.168.228.4:8080/recursos')
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

export default CellphoneList;