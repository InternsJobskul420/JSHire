import React, { useEffect,useState, useRef } from "react";
import sampleimage from "../../assets/video.svg";
import styles from "./Candidate.module.css";
import CandidateLayout from "../../components/CandidateLayout/CandidateLayout";
import { Navigate, useNavigate } from "react-router-dom";

const EquipmentTesting = () => {
  const videoRef = useRef();
  const [hasAccess, setHasAccess] = useState(false);
  const navigate = useNavigate();

 
  const startInterview = ()=>{
    navigate('../candidateinterview')
  }

  useEffect(() => { 
   
    const constrains = {audio: true, video: true}
    const getAccess = async ()=>{
      const getMedia = await navigator.mediaDevices.getUserMedia(constrains);
      console.log("done");
      videoRef.current.srcObject = getMedia;
      console.log(getMedia);

    }
    
   getAccess();
  
  }, []);

  return (
    <>
   
   <div className={styles.candidate_message_container}>
      <div className={styles.bg}>
        <div className={styles.videoContainer}>
         <div className={styles.equipBody}>Let's get you set up!</div>
        <div className={`${styles.equipBody} `}>
          <video ref={videoRef} className={styles.candidate_video} autoPlay playsInline  ></video>
        </div>
        <div className={styles.equipBody}>Do a Webcam and Audio Test</div>
        <div className={styles.equipBody}>
          Make sure your camera is switched on and net connection is good
        </div>
        <div className={styles.equipBody}>
          <button className={styles.candidateButton} onClick={startInterview}>Start Interview</button>
        </div>
        
        </div>
      </div>
      </div>
    </>
  );
};

export default EquipmentTesting;
