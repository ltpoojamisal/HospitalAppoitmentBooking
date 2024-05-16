import logo from './logo.svg';
import './App.css';
import Navabar from './componenets/Navabar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NewAppoitment from './componenets/NewAppoitment';
import Dashboard from './componenets/Dashboard';
import AppoitementList from './componenets/AppoitementList';


function App() {
  return (
    <BrowserRouter>
     <div className="">
      <Navabar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/newappoitement" element={<NewAppoitment/>}></Route>
        <Route path="/appoitmentlist" element={<AppoitementList/>}></Route>
        
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
