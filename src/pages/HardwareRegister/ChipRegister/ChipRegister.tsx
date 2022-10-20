import style from './ChipRegister.module.scss'

function ChipRegister() {
  return (
    <div className={style.formContainer}>
      <form>

      <div className={style.formGroup}>
          <label className={style.formLabel}>Número:</label>
          <input 
            className={style.formField} 
            type='tel' 
            placeholder='Informe o número do Chip...' 
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

export default ChipRegister;