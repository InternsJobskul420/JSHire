import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login/Login';
import { HiringCompnayForm } from './interfaces/Admin/SuperUser/HiringCompnayForm';
import { HCCard } from './components/HCCard/HCCard';
import { HiringCompany } from './interfaces/Admin/SuperUser/HiringCompany';
import UpdateHCAccount from './interfaces/Admin/SuperUser/UpdateHCAccount';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Login/>}/> /* Set a page as home */
        <Route path='/hringcompanyform' element={<HiringCompnayForm/>}/>
        <Route path='/hringcompany' element={<HiringCompany/>}/>
        <Route path='/updatehcaccount' element={<UpdateHCAccount/>}/>

       
      </Routes>
    </Router>
  );
}

export default App;
