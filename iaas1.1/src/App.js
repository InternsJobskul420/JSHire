import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login/Login';
import { HiringCompnayForm } from './interfaces/Admin/SuperUser/HiringCompnayForm';
import { HCCard } from './components/HCCard/HCCard';
import { HiringCompany } from './interfaces/Admin/SuperUser/HiringCompany';
import WelcomePage from './interfaces/Candidate/WelcomePage';
import EndInterview from './interfaces/Candidate/EndInterview';
import UpdateHCAccount from './interfaces/Admin/SuperUser/UpdateHCAccount';
import { JobOpeningForm } from './interfaces/Admin/HiringCompany/JobOpeningForm';
import { JobOpenings } from './interfaces/Admin/HiringCompany/JobOpenings';
import { ViewCandidates } from './interfaces/Admin/HiringCompany/ViewCandidates';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Login/>}/> /* Set a page as home */
        <Route path='/hringcompanyform' element={<HiringCompnayForm/>}/>
        <Route path='/hringcompany' element={<HiringCompany/>}/>
        <Route path='/candidateWelcome' element={<WelcomePage/>}/>
        <Route path='/EndInterview' element={<EndInterview/>}/>
        <Route path='/updatehcaccount' element={<UpdateHCAccount/>}/>
        <Route path='/jobopeningform' element={<JobOpeningForm/>}/>
        <Route path='/jobopening' element={<JobOpenings />}/>
        <Route path='/viewcandidates' element={<ViewCandidates/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
