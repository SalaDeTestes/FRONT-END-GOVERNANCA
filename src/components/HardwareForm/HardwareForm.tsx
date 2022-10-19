import React from 'react';
import style from './HardwareForm.module.scss'

function HardwareForm() {
  return (
    <div className={style.formContainer}>
      <form>
        <label className={style.formSubTitle}>Dados:</label>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Nome:</label>
          <input className={style.formField} type='text' placeholder='Informe o nome do usuário...' required></input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Cargo:</label>
          <input className={style.formField} type='text' placeholder='Informe o cargo do usuário...' required></input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Líder:</label>
          <input className={style.formField} type='text' placeholder='Informe o líder do usuário...' ></input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Empresa:</label>
          <select className={style.formField} name='empresa' required>
            <option value=''>Selecione a empresa...</option>
            <option value='Laticínio Minas Gerais'>Laticínio Minas Gerais</option>
            <option value='Laticínio Canto de Minas'>Laticínio Canto de Minas</option>
            <option value='Margarida'>Margarida</option>
          </select>
        </div>
        
        <div className={style.formGroup}>
          <label className={style.formLabel}>Cidade:</label>
          <input className={style.formField} type='text' placeholder='Informe a cidade do usuário...' required></input>
        </div>

        <br/>
        <label className={style.formSubTitle}>Contato:</label>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Número de Celular:</label>
          <input className={style.formField} type='tel' placeholder='(XX) X XXXX-XXXX' required></input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>E-mail:</label>
          <input className={style.formField} type='email' placeholder='Informe o e-mail do usuário...' required></input>
        </div>

        <br/>
        <label className={style.formSubTitle}>Hardware:</label>
        
        <div className={style.formGroup}>
          <button className={style.buttonAdd} type='button'>+</button>
        </div>

        <div className={style.formButtons}>
          <button className={style.buttonSave} type='submit'>Salvar</button>
          <button className={style.buttonCancel} type='button'>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default HardwareForm;