import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Homepage from './Pages/Homepage/HomePage';
import DoctorDetails from './Pages/Doctor/DoctorDetail/DoctorDetails';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/doctor-details/:id' element={<DoctorDetails />} />
      </Routes>
    </div>
  );
}

export default App;
