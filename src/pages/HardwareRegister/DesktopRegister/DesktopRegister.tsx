import Label from '../../../components/Form/Label/Label';
import TextArea from '../../../components/Form/TextArea/TextArea';
import style from './DesktopRegister.module.scss'

function DesktopRegister() {
  return (
    <div className={style.formContainer}>

      <form>

        <div className={style.formGroup}>
          <Label>Tag:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a tag do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Marca:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a marca do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Modelo:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o modelo do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Endereço MAC:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o endereço MAC do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Processador:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o processador do desktop...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Memória RAM:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a quantidade de memódia RAM...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Armazenamento:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a capacidade de armazenamento...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Condição:</Label>
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
          <Label>Nota Fiscal:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a nota fiscal do desktop...' 
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

export default DesktopRegister;