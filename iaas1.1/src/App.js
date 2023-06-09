import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import { HiringCompnayForm } from './interfaces/Admin/SuperUser/HiringCompnayForm';
import { HiringCompany } from './interfaces/Admin/SuperUser/HiringCompany';
import WelcomePage from './interfaces/Candidate/WelcomePage';
import EndInterview from './interfaces/Candidate/EndInterview';
import UpdateHCAccount from './interfaces/Admin/SuperUser/UpdateHCAccount';
import { JobOpeningForm } from './interfaces/Admin/HiringCompany/JobOpeningForm';
import { JobOpenings } from './interfaces/Admin/HiringCompany/JobOpenings';
import { ViewCandidates } from './interfaces/Admin/HiringCompany/ViewCandidates';
import CandidateInterview from './interfaces/Candidate/CandidateInterview';
import EquipmentTesting from './interfaces/Candidate/EquipmentTesting';
import LoginSU from './interfaces/Admin/SuperUser/LoginSU';
import LoginHC from './interfaces/Admin/HiringCompany/LoginHC';
import { UploadCv } from './interfaces/Candidate/UploadCv';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Login/>}/> /* Set a page as home */
        <Route path='hiringcompanyform' element={<HiringCompnayForm/>}/>
        {/* <Route path='/hiringcompany' element={<HiringCompany/>}/> */}
        <Route path="hiringcompany" element={<HiringCompany />}/>
         
        <Route path='/candidatewelcome' element={<WelcomePage/>}/>
        <Route path='/endInterview' element={<EndInterview/>}/>
        <Route path= '/uploadcv' element={<UploadCv/>}/>
        <Route path='/updatehcaccount' element={<UpdateHCAccount/>}/>
        <Route path='/jobopeningform' element={<JobOpeningForm/>}/>
        <Route path='/jobopening' element={<JobOpenings/>}/>
        <Route path='/viewcandidates' element={<ViewCandidates/>}/> 
        <Route path='/candidateinterview' element={<CandidateInterview/>}/> 
        <Route path='/equipmenttesting' element={<EquipmentTesting/>}/> 
        <Route path='/loginSU' element={<LoginSU/>}/> 
        <Route path='/loginHC' element={<LoginHC/>}/>
        {/* <Route path="*" element={<Navigate to="/" />} /> {/* Fallback route for unknown paths */}  
        
        
      </Routes>
    </Router>
  );
}

export default App;
