import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import CandidateShowMessage from '../../components/CandidateShowMessage/CandidateShowMessage';
import styles from './Candidate.module.css'
import CandidateLayout from '../../components/CandidateLayout/CandidateLayout';

const EndInterview = () => {
  const heading = "Congratulations!";
  const description = "You have successfully completed the interview :)";
  const [seconds, setSeconds] = useState(5);
  const [uploadMessage, setUploadMessage] = useState("Wait for a few seconds while we finish uploading your videos");

  const location = useLocation();
  const {urls, transcriptedText} = location.state;
  console.log(urls, transcriptedText);


  useEffect(() => {
    if (seconds === 0) {
      setUploadMessage('Your Data has been successfully uploaded');
    }
  }, [seconds]);


  useEffect(()=>{
    const interval = setInterval(()=>{
      setSeconds((prevSeconds)=>{
        if (prevSeconds === 0) {
          clearInterval(interval);
          return prevSeconds;
      }
      return prevSeconds - 1;
    } );
    }, 1000);

    return ()=>{
      clearInterval(interval);
    }
  }, []);
   
  return(
    <CandidateLayout>
        <CandidateShowMessage header={heading} description={description} />
        <div className={`${seconds !== 0 ? styles.timer : ""}`}>{seconds !== 0 ? seconds: ""}</div>
        
        <p className={styles.candidate_agreement}>{uploadMessage}</p>
        
       
        
        </CandidateLayout>
  );
}

export default EndInterview
