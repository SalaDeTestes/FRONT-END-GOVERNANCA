import style from './List.module.scss'

function List() {
  const items = [{
    nome: 'teste'
  }]
  
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.nome}</li>
        ))}
      </ul>
    </>
  )
}

export default List;