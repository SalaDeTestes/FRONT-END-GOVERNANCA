import BigButton from '../../components/BigButton/BigButton';

import style from './Home.module.scss';

function Home() {
  return (
    <>
      <div className={style.bigButtonsContainer}>
        <BigButton href='/users/register'>PESSOAS</BigButton>
        <BigButton href='/hardware/type'>HARDWARE</BigButton>
      </div>
    </>
  )
}

export default Home;