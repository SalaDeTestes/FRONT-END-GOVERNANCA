import Home from './pages/Home/Home';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import HardwareRegistration from './pages/HardwareRegistration/HardwareRegistration';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/form' element={<UserRegistration />} />
        <Route path='/hardware/form' element={<HardwareRegistration />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;