import React, { useEffect, useState, useRef } from "react";
import sampleimage from "../../assets/video.svg";
import styles from "./Candidate.module.css";
import CandidateLayout from "../../components/CandidateLayout/CandidateLayout";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const EquipmentTesting = () => {

  const location = useLocation();
  const {id,company} = location.state;
  console.log(id,company); 
  console.log("hello");
  const videoRef = useRef();
  const [hasAccess, setHasAccess] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const navigate = useNavigate();

  const startInterview = () => {
    navigate("../candidateinterview",{state:{id:id, company:company}});
  };

  useEffect(() => {
    const constraints = { audio: true, video: true };

    const getAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setHasAccess(true);
        videoRef.current.srcObject = stream;

        // Microphone testing
        // const audioContext = new AudioContext();
        // const audioSource = audioContext.createMediaStreamSource(stream);
        // const analyser = audioContext.createAnalyser();
        // analyser.fftSize = 32;
        // const bufferLength = analyser.frequencyBinCount;
        // const dataArray = new Uint8Array(bufferLength);

        // const getMicrophoneLevel = () => {
        //   analyser.getByteFrequencyData(dataArray);
        //   const total = dataArray.reduce((acc, value) => acc + value, 0);
        //   const average = total / bufferLength;
        //   setAudioLevel(average);
        // };

        // audioSource.connect(analyser);
        // const intervalId = setInterval(getMicrophoneLevel, 100);
        // return () => {
        //   clearInterval(intervalId);
        //   audioContext.close();
        // };
      } catch (error) {
        if (error.name === "NotAllowedError") {
          // User blocked camera or microphone access
          // Prompt the user to enable access for camera and microphone
          const cameraPermission = await navigator.permissions.query({ name: "camera" });
          const microphonePermission = await navigator.permissions.query({ name: "microphone" });
    
          if (cameraPermission.state === "prompt" || microphonePermission.state === "prompt") {
            await navigator.mediaDevices.getUserMedia(constraints);
          } else {
            console.log("Camera or microphone access blocked by the user");
          }
        } else {
          console.error("Error accessing media devices:", error);
        }
        

      }
    };

    getAccess();
  }, []);

  return (
    <>
      <div className={styles.candidate_message_container}>
        <div className={styles.bg}>
          <div className={styles.videoContainer}>
            <div className={styles.equipBody}>Let's get you set up!</div>
            <div className={`${styles.equipBody}`}>
              <video
                ref={videoRef}
                className={styles.candidate_video}
                autoPlay
                playsInline
                style={{ transform: "scaleX(-1)" }}
              ></video>
            </div>
            <div className={styles.equipBody}>Do a Webcam and Audio Test</div>
            <div className={styles.equipBody}>
              Make sure your camera is switched on and the internet connection is good.
            </div>
            <div className={styles.equipBody}>
              <button className={styles.candidateButton} onClick={startInterview}>
                Start Interview
              </button>
            </div>
            {hasAccess && (
              <div className={styles.equipBody}>
              
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentTesting;
