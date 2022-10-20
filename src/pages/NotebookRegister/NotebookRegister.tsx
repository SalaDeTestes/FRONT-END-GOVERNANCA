import style from './NotebookRegister.module.scss'

function NotebookRegister() {
  return (
    <div className={style.formContainer}>

      <form>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Tag:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a tag do notebook...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Marca:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a marca do notebook...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Modelo:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o modelo do notebook...' 
            required >
          </input>
        </div>

        <div className={style.formButtons}>
          <button className={style.buttonSave} type='submit'>Salvar</button>
          <button className={style.buttonCancel} type='button'>Cancelar</button>
        </div>

      </form>
    
    </div>
  )
}

export default NotebookRegister;