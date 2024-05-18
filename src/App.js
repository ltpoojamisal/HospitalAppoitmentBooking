import logo from './logo.svg';
import './App.css';
import Navabar from './componenets/Navabar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NewAppoitment from './componenets/NewAppoitment';
import Dashboard from './componenets/Dashboard';
import AppoitementList from './componenets/AppoitementList';
import Paitent from './componenets/Paitent';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoleSelection from './componenets/RoleSelection';
import AdminLogin from './componenets/AdminLogin';
import { useState } from 'react';
import {selectIsLoggedIn} from './store/slices/AdminSlice';
import { useSelector } from 'react-redux';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
const isloggedIn=useSelector(selectIsLoggedIn)
  return (
    <BrowserRouter>
     <div className="">
     {isloggedIn && <Navabar />}
      <Routes>
        {/* <Route path="/" element={<RoleSelection/>}></Route> */}
        <Route path="/" element={<AdminLogin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/newappoitement" element={<NewAppoitment/>}></Route>
        <Route path="/appoitmentlist" element={<AppoitementList/>}></Route>
        <Route path="/patientlist" element={<Paitent/>}></Route>
        <Route path="/navbar" element={<Navabar />} />
      </Routes>
      {/* <Navabar/> */}
    </div>
    </BrowserRouter>
   
  );
}

export default App;
