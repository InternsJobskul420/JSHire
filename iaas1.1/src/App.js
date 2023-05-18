import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavigationBar/>}/>
        <Route path='/login' element={<Login/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
