import style from './CellphoneRegister.module.scss'

function CellphoneRegister() {
  return (
    <div className={style.formContainer}>
      
      <form>

        <div className={style.formButtons}>
          <button className={style.buttonSave} type='submit'>Salvar</button>
          <button className={style.buttonCancel} type='button'>Cancelar</button>
        </div>
      
      </form>
    
    </div>
  )
}

export default CellphoneRegister;