import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '../../../components/List/List'
import SideBar from '../../../components/SideBar/SideBar';
import style from './NotebookList.module.scss'
import IRecursos from '../../../interfaces/Recursos/Recursos';

function NotebookList() {

  const [notebook, setNotebook] = useState([])

  useEffect(() => {
    axios.get('http://viacep.com.br/ws/01001000/json/')
      .then(response => {
        console.log(response)
        setNotebook(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <SideBar/>
      {Object.values(notebook).map((key) => {
        return (
        <>
          {key}
        </>
        )
      })}
    </>
  )
}

export default NotebookList;