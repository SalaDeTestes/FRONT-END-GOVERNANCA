import axios from 'axios';
import { useEffect } from 'react';
import List from '../../../components/List/List'
import style from './NotebookList.module.scss'

function NotebookList() {
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
      <List />
    </>
  )
}

export default NotebookList;