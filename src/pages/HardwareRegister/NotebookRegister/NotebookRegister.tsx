import Label from '../../../components/Form/Label/Label';
import TextArea from '../../../components/Form/TextArea/TextArea';
import style from './NotebookRegister.module.scss'

function NotebookRegister() {
  return (
    <div className={style.formContainer}>

      <form>

        <div className={style.formGroup}>
          <Label>Tag:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a tag do notebook...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Marca:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe a marca do notebook...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Modelo:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o modelo do notebook...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Endereço MAC:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o endereço MAC do notebook...' 
            required >
          </input>
        </div>

        <div className={style.formGroup}>
          <Label>Processador:</Label>
          <input 
            className={style.formField} 
            type='text' 
            placeholder='Informe o processador do notebook...' 
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
          <Label>Condição do Notebook:</Label>
          <select 
            className={style.formField} 
            name='' 
            required >
              <option value=''>Selecione a condição do notebook...</option>
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
            placeholder='Informe a nota fiscal do notebook...' 
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

export default NotebookRegister;