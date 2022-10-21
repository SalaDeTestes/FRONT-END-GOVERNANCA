import Label from '../../../components/Form/Label/Label';
import TextArea from '../../../components/Form/TextArea/TextArea';
import style from './CellphoneRegister.module.scss'

function CellphoneRegister() {
  return (
    <div className={style.formContainer}>
      
      <form>

        <div className={style.formGroup}>
          <Label>IMEI:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o código IMEI do celular...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Marca:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a marca do celular...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Modelo:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o modelo do celular...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Condição:</Label>
          <select 
            className={style.formField} 
            name='' 
            required >
              <option value=''>Selecione a condição do celular...</option>
              <option value='Ótimo'>Ótimo</option>
              <option value='Bom'>Bom</option>
              <option value='Ruim'>Ruim</option>
              <option value='Péssimo'>Péssimo</option>
          </select>
        </div>

        <div className={style.formGroup}>
          <Label>Nota Fiscal:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a nota fiscal do celular...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Observações:</Label>
          <TextArea />
        </div>
        
        <div className={style.formButtons}>
          <button className={style.buttonSave} type='submit'>Salvar</button>
          <button className={style.buttonCancel} type='button'>Cancelar</button>
        </div>
      
      </form>
    
    </div>
  )
}

export default CellphoneRegister;