import './App.css';
import { Home, Form, Detail, Landing } from './Views'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import axios from 'axios';
// axios.defaults.baseURL = 'https://deploy-countries-production-7c52.up.railway.app'
function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}
export default App;