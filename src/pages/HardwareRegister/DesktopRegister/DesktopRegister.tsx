import style from './DesktopRegister.module.scss'

function DesktopRegister() {
  return (
    <div className={style.formContainer}>

      <form>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Tag:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a tag do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Marca:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a marca do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Modelo:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o modelo do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Endereço MAC:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o endereço MAC do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Processador:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o processador do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Memória RAM:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a quantidade de memódia RAM...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Armazenamento:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a capacidade de armazenamento...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Condição:</label>
          <select 
            className={style.formField} 
            name='' 
            required >
              <option value=''>Selecione a condição do desktop...</option>
              <option value='Ótimo'>Ótimo</option>
              <option value='Bom'>Bom</option>
              <option value='Ruim'>Ruim</option>
              <option value='Péssimo'>Péssimo</option>
          </select>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Nota Fiscal:</label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a nota fiscal do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <label className={style.formLabel}>Observações:</label>
          <textarea 
            className={style.formTextArea} 
            placeholder='...'
            name='' >
          </textarea>
        </div>

        <div className={style.formButtons}>
          <button className={style.buttonSave} type='submit'>Salvar</button>
          <button className={style.buttonCancel} type='button'>Cancelar</button>
        </div>

      </form>

    </div>
  )
}

export default DesktopRegister;