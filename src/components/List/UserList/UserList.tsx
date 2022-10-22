import axios from 'axios'
import { useEffect, useState } from 'react'
import IPessoas from '../../../types/Pessoas/Pessoas'
import Button from '../../Button/Button'
import style from './UserList.module.scss'

function List() {
  
  const [pessoas, setPessoas] = useState<IPessoas[]>([])

  useEffect(() => {
    axios.get('http://192.168.228.4:8080/pessoas')
      .then(response => {
        setPessoas(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
    <div className={style.listContainer}>
      <ul className={style.list}>
        {pessoas?.map((item) => {
          return (
            <div className={style.listItem}>
              <li className={style.listText} key={item.id}>{item.nome.toUpperCase()}</li>
            </div>
          )
        })}
      </ul>
      </div>
    </>
  )
}

export default List;