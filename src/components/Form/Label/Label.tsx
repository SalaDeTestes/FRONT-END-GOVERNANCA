import style from './Label.module.scss';

interface ILabel {
  children?: React.ReactNode
}

function Label({children}: ILabel) {
  return (
    <label className={style.formLabel}>{children}</label>
  )
}

export default Label