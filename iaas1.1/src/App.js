import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login/Login';
import { HiringCompnayForm } from './interfaces/Admin/SuperUser/HiringCompnayForm';
import { HCCard } from './components/HCCard/HCCard';
import { HiringCompany } from './interfaces/Admin/SuperUser/HiringCompany';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Login/>}/> /* Set a page as home */
        <Route path='/hringcompanyform' element={<HiringCompnayForm/>}/>
        <Route path='/hringcompany' element={<HiringCompany/>}/>

       
      </Routes>
    </Router>
  );
}

export default App;
