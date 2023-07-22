import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import CandidateCard from '../../../components/CandidateCard/CandidateCard';
import styles from './ViewCandidates.module.css'; // Import the CSS module


export const ViewCandidates = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const address = "http://localhost:80/api"
  const {jobRole, company, applicationLink} = location.state;
  console.log(applicationLink);
  const [candidateApplied, setAppliedCandidate]= useState(null);

  // console.log(applicationLink);

  const fetchCandidates =async()=>{

    try {

      // console.log(link)
    if(applicationLink){
      let response = await axios.post(`${address}/appliedcandidates`,{
        link: applicationLink
      },{
        headers:{
          'Content-Type': 'application/json'
        }
      })
      // console.log(response.data.candidates)
      setAppliedCandidate(response.data.candidates);

    }
      
    } catch (error) {
      
    }
    
    
   
  }

  
  // reference for the profile pic
  // imageUrl={`${address}/${candidate.profilePic}`}

  useEffect(()=>{
    if(applicationLink)
    fetchCandidates()
  },[])
  return (
    <>
      <NavigationBar />
      <h1 className={styles.formHeading}>Candidate Profiles</h1>
      <div className={styles['display-cards']}>
        {candidateApplied ?candidateApplied.map((candidate)=>{
return(
  <><CandidateCard key={candidate._id} name={candidate.name} college={candidate.collegeName}  id={candidate._id} jobRole={jobRole}  applicationLink={applicationLink} company={company} interviewLink={candidate.interviewLink} /></>
)
        })
      : <p>No candidates have applied yet!</p> }
        
      </div>
    </>
  );
};
