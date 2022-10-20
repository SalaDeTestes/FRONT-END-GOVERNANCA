import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import UserRegister from './pages/UserRegister/UserRegister';
import HardwareType from './pages/HardwareType/HardwareType';
import NotebookRegister from './pages/NotebookRegister/NotebookRegister';
import DesktopRegister from './pages/DesktopRegister/DesktopRegister';
import CellphoneRegister from './pages/CellphoneRegister/CellphoneRegister';
import ChipRegister from './pages/ChipRegister/ChipRegister';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/register' element={<UserRegister />} />
        <Route path='/hardware/type' element={<HardwareType />} />
        <Route path='/hardware/notebook/register' element={<NotebookRegister />} />
        <Route path='/hardware/desktop/register' element={<DesktopRegister />} />
        <Route path='/hardware/cellphone/register' element={<CellphoneRegister />} />
        <Route path='/hardware/chip/register' element={<ChipRegister />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;