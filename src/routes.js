import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import UserRegister from './pages/UserRegister/UserRegister';
import NotebookList from './pages/HardwareList/NotebookList/NotebookList';
import NotebookRegister from './pages/HardwareRegister/NotebookRegister/NotebookRegister';
import DesktopRegister from './pages/HardwareRegister/DesktopRegister/DesktopRegister';
import CellphoneRegister from './pages/HardwareRegister/CellphoneRegister/CellphoneRegister';
import ChipRegister from './pages/HardwareRegister/ChipRegister/ChipRegister';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/persons/register' element={<UserRegister />} />
        <Route path='/hardware/notebook/list' element={<NotebookList />} />
        <Route path='/hardware/notebook/register' element={<NotebookRegister />} />
        <Route path='/hardware/desktop/register' element={<DesktopRegister />} />
        <Route path='/hardware/cellphone/register' element={<CellphoneRegister />} />
        <Route path='/hardware/chip/register' element={<ChipRegister />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;