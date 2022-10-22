import axios from 'axios';
import React, { useState } from 'react';
import IPessoa from '../../types/Pessoa/Pessoa';
import style from './UserRegister.module.scss'

function UserRegister() {
  const [pessoa, setPessoa] = useState<IPessoa>({
    id: undefined,
    nome: '',
    cargo: '',
    telefone: '',
    cidade: '',
    dataCriacao: '',
    lider: '',
    empresa: '',
    email: '',
    senha: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    axios.post('http://192.168.228.4:8080/pessoas', {
      nome: pessoa.nome,
      cargo: pessoa.cargo,
      telefone: pessoa.telefone,
      cidade: pessoa.cidade,
      lider: pessoa.lider,
      empresa: pessoa.empresa,
      email: pessoa.email,
      senha: 'senhapadrao'
    })
      .then(() => {
        alert("Pessoa cadastrada com sucesso")
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setPessoa({...pessoa, [event.target.name]: event.target.value})
  }

  return (
    <div className={style.adjust}>
      <div className={style.formContainer}>

        <form onSubmit={handleSubmit}>

          <label className={style.formSubTitle}>Dados:</label>

          <div className={style.formGroup}>
            <label className={style.formLabel}>Nome:</label>
            <input 
              className={style.formField} 
              name='nome'
              value={pessoa?.nome}
              onChange={handleChange} 
              type='text' 
              placeholder='Informe o nome do usuário...' 
              required >
            </input>
          </div>

          <div className={style.formGroup}>
            <label className={style.formLabel}>Cargo:</label>
            <input 
              className={style.formField} 
              name='cargo'
              value={pessoa?.cargo}
              onChange={handleChange} 
              type='text' 
              placeholder='Informe o cargo do usuário...' 
              required >
            </input>
          </div>

          <div className={style.formGroup}>
            <label className={style.formLabel}>Líder:</label>
            <input 
              className={style.formField} 
              name='lider'
              value={pessoa?.lider} 
              onChange={handleChange} 
              type='text' 
              placeholder='Informe o líder do usuário...' >
            </input>
          </div>

          <div className={style.formGroup}>
            <label className={style.formLabel}>Empresa:</label>
            <select 
              className={style.formField} 
              name='empresa'
              value={pessoa?.empresa} 
              onChange={handleChange} 
              required >
                <option value=''>Selecione a empresa...</option>
                <option value='Laticínio Minas Gerais'>Laticínio Minas Gerais</option>
                <option value='Laticínio Canto de Minas'>Laticínio Canto de Minas</option>
                <option value='Margarida'>Margarida</option>
            </select>
          </div>
          
          <div className={style.formGroup}>
            <label className={style.formLabel}>Cidade:</label>
            <input 
              className={style.formField} 
              name='cidade'
              value={pessoa?.cidade} 
              onChange={handleChange} 
              type='text' 
              placeholder='Informe a cidade do usuário...' 
              required >
            </input>
          </div>

          <br/>
          
          <label className={style.formSubTitle}>Contato:</label>

          <div className={style.formGroup}>
            <label className={style.formLabel}>Número de Celular:</label>
            <input 
              className={style.formField}
              name='telefone'
              value={pessoa?.telefone}
              onChange={handleChange} 
              type='tel' 
              placeholder='(XX) X XXXX-XXXX' 
              required >
            </input>
          </div>

          <div className={style.formGroup}>
            <label className={style.formLabel}>E-mail:</label>
            <input 
              className={style.formField}
              name='email'
              value={pessoa?.email}
              onChange={handleChange} 
              type='email' 
              placeholder='Informe o e-mail do usuário...' 
              required >
            </input>
          </div>

          <br/>

          <div className={style.formButtons}>
            <button className={style.buttonSave} type='submit'>Salvar</button>
            <button className={style.buttonCancel} type='button'>Cancelar</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default UserRegister;