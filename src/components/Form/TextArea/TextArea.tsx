import style from './TextArea.module.scss'

function TextArea() {
  return (
    <textarea 
      className={style.formTextArea} 
      placeholder='...'
      name='observacao' >
    </textarea>
  )
}

export default TextArea;