import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BreadcrumbNav from './components/BreadcrumbNav/BreadcrumbNav';

// Import your components here
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
import { ScheduleInterview } from './interfaces/Admin/HiringCompany/ScheduleInterview';
import SpeechToText from './interfaces/Candidate/SpeechToText';

function App() {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/hiringcompanyform', label: 'Hiring Company Form' },
    { path: '/hiringcompany', label: 'Hiring Company' },
    { path: '/candidatewelcome', label: 'Candidate Welcome' },
    { path: '/endInterview', label: 'End Interview' },
    { path: '/apply/:company/:jobId', label: 'Upload CV' },
    { path: '/updatehcaccount', label: 'Update HC Account' },
    { path: '/jobopeningform', label: 'Job Opening Form' },
    { path: '/jobopening', label: 'Job Openings' },
    { path: '/viewcandidates', label: 'View Candidates' },
    { path: '/candidateinterview', label: 'Candidate Interview' },
    { path: '/equipmenttesting', label: 'Equipment Testing' },
    { path: '/scheduleinterview', label: 'Schedule Interview' },
    { path: '/loginSU', label: 'Login SU' },
    { path: '/loginHC', label: 'Login HC' },
  ];

  return (
    <Router>
      <div>
        <BreadcrumbNav routes={routes} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hiringcompanyform" element={<HiringCompnayForm />} />
          <Route path="/hiringcompany" element={<HiringCompany />} />
          <Route path="/candidatewelcome/:company/:candidateId" element={<WelcomePage />} />
          <Route path="/endInterview" element={<EndInterview />} />
          <Route path="/apply/:company/:jobId" element={<UploadCv />} />
          <Route path="/updatehcaccount" element={<UpdateHCAccount />} />
          <Route path="/jobopeningform" element={<JobOpeningForm />} />
          <Route path="/jobopening" element={<JobOpenings />} />
          <Route path="/viewcandidates" element={<ViewCandidates />} />
          <Route path="/candidateinterview" element={<CandidateInterview />} />
          <Route path="/equipmenttesting" element={<EquipmentTesting />} />
          <Route path="/scheduleinterview" element={<ScheduleInterview />} />
          <Route path="/loginSU" element={<LoginSU />} />
          <Route path="/speech" element={<SpeechToText/>} />
          <Route path="/loginHC" element={<LoginHC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
