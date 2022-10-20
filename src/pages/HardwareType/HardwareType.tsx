import BigButton from '../../components/BigButton/BigButton';

import style from './HardwareType.module.scss';

function HardwareType() {
  return (
    <>
      <div className={style.bigButtonsContainer}>
        <BigButton href='/hardware/notebook/register'>NOTEBOOK</BigButton>
        <BigButton href='/hardware/desktop/register'>DESKTOP</BigButton>
        <BigButton href='/hardware/cellphone/register'>CELULAR</BigButton>
        <BigButton href='/hardware/chip/register'>CHIP</BigButton>
      </div>
    </>
  )
}

export default HardwareType;