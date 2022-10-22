import axios from 'axios'
import { useEffect, useState } from 'react'
import IRecurso from '../../../types/Recurso/Recurso'
import style from './HardwareList.module.scss'

interface IList {
  type: string | undefined
}

function List({type}: IList) {
  
  const [recursos, setRecursos] = useState<IRecurso[]>([])

  useEffect(() => {
    axios.get('http://192.168.228.4:8080/recursos')
      .then(response => {
        setRecursos(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className={style.listContainer}>
        {recursos?.map((item) => {
          const tagType = item.tag.slice(0, 3)
          if (tagType === type){
            return (
              <ul>
                <li key={item.id}>TAG: {item.tag}</li>
              </ul>
            )
          }
        })}
      </div>
  )
}

export default List;