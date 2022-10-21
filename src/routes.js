import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';

import UserList from './pages/UserList/UserList';
import UserRegister from './pages/UserRegister/UserRegister';

import NotebookList from './pages/HardwareList/NotebookList/NotebookList';
import NotebookRegister from './pages/HardwareRegister/NotebookRegister/NotebookRegister';

import DesktopList from './pages/HardwareList/DesktopList/DesktopList';
import DesktopRegister from './pages/HardwareRegister/DesktopRegister/DesktopRegister';

import CellphoneList from './pages/HardwareList/CellphoneList/CellphoneList';
import CellphoneRegister from './pages/HardwareRegister/CellphoneRegister/CellphoneRegister';

import ChipList from './pages/HardwareList/ChipList/ChipList';
import ChipRegister from './pages/HardwareRegister/ChipRegister/ChipRegister';

function AppRouter() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/user/list' element={<UserList />} />
        <Route path='/user/register' element={<UserRegister />} />

        <Route path='/hardware/notebook/list' element={<NotebookList />} />
        <Route path='/hardware/notebook/register' element={<NotebookRegister />} />

        <Route path='/hardware/desktop/list' element={<DesktopList />} />
        <Route path='/hardware/desktop/register' element={<DesktopRegister />} />

        <Route path='/hardware/cellphone/list' element={<CellphoneList />} />
        <Route path='/hardware/cellphone/register' element={<CellphoneRegister />} />

        <Route path='/hardware/chip/list' element={<ChipList />} />
        <Route path='/hardware/chip/register' element={<ChipRegister />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;