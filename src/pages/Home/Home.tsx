import Header from '../../components/Header/Header';
import BigButton from '../../components/BigButton/BigButton';

import style from './Home.module.scss';

function App() {
  return (
    <div>
      <Header />
      <div className={style.bigButtonsContainer}>
        <BigButton type='button'>Usuários</BigButton>
        <BigButton type='button'>Hardware</BigButton>
      </div>
    </div>
  )
}

export default App;