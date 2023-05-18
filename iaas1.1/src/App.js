import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login/Login';
import { HiringCompnayForm } from './interfaces/Admin/SuperUser/HiringCompnayForm';
import { HCCard } from './components/HCCard/HCCard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavigationBar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/hringcompanyform' element={<HiringCompnayForm/>}/>
        <Route path='/hringcompany' element={<HCCard/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
