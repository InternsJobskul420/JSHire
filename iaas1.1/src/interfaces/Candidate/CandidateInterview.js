import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import { useReactMediaRecorder } from 'react-media-recorder';

import styles from "./Candidate.module.css";
// import sampleimage from "../../assets/video.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { stream } from "./EquipmentTesting";

console.log(stream);

const CandidateInterview = () => {






  const location = useLocation();
  const { id, company } = location.state;
  // let stream;
  let isRecording = false;
  let ans = "";
  const numberOfQuestions = 20;
  const buttonsPerColumn = 10;
  const ansTime = 10000;
  const noOfColumns = Math.ceil(numberOfQuestions / buttonsPerColumn);
  const TotalQuestions = 5;
  

  const navigate = useNavigate();
  const candidateVideo = useRef();
  const questionNumberRef = useRef(0);
  const transcriptedText = useRef([]);
  const url = useRef();
  const testVideo = useRef();
  const videoUrls = useRef([])

  //------------useState variables-------------------------//
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [isIntervalActive, setIsIntervalActive] = useState(true);
  // const [transcriptedtext, setTranscriptedText] = useState({});
  const [quizTimer, setquizTimer] = useState(10);
  const [startTimer, setstartTimer] = useState(10);
  const [startStopButtonActive, setStartStopButtonActive] = useState(false);
  // const [timer, setTimer] = useState(30);
  // const [isTime, setIstime] = useState(true);
  // const [recordedVideos, setRecordedVideos] = useState([]);


  //------------react-speech-recognition variables-------------------------//

  const { transcript,listening ,resetTranscript ,browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition({});
  const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening =()=> SpeechRecognition.stopListening();
  // const [timer, setTimer] = useState(30);
  const [intervalId, setIntervalId] = useState(null);
  const [intervalId2, setIntervalId2] = useState(null);
  // console.log(number);




  
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ video: true });

      // console.log(transcript);
      // console.log(transcriptedtext);
      // console.log(recordedVideos);

  // console.log(timer);

  // console.log(videoUrls);
  // console.log(transcript);
  // console.log(transcriptedText);


//----------formatting time ---------------------------//

 const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };



  const options = {
    audio:false,
    video: true,
    mimeType: 'video/mp4', // Specify the desired media type
  };


const saveMedia =(url)=>{

  // Create a download link
  // console.log(questionNumberRef.current);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = `video_${questionNumberRef.current}.webm`;

  const prevQno = questionNumberRef.current - 1;
  let length = videoUrls.current.length;
  

  if(videoUrls.current[length-1] !== url){
    videoUrls.current = [...videoUrls.current, url];
    // console.log(storeVideoUrls.current[questionNumberRef]);
    // storeVideoUrls.current[questionNumberRef] = url;
  }
  
  // console.log(downloadLink);

    // console.log(transcript)
    // transcriptedText.current = [...transcriptedText.current, transcript];
    // console.log(transcriptedText)
  // console.log(storeVideoUrls.current);
  // Save the downloaded video URL
  // setRecordedVideos(prevVideos => [
  //   ...prevVideos,
  //   { questionNumber: questionNumberRef.current, url: mediaBlobUrl }
  // ]);


}


const saveTranscript = (transcript)=>{
  console.log(transcript);
  ans = transcript;
  // transcriptedText.current.push(transcript);
  console.log("inside");
  // console.log(transcriptedText.current);
  // resetTranscript();
}


const startQuizztimer = ()=>{

  const interval = setInterval(()=>{
    setquizTimer((prev)=>prev -1);
    setIntervalId2(interval)
  },1000);



  setTimeout(()=>{
    // console.log("time");
    clearInterval(interval);
    setquizTimer(10);
  },ansTime+1000);
  
}


const stopquizTimer = ()=>{
 
  setquizTimer(10);
  clearInterval(intervalId2);
}


let firstTimer = ()=>{
  let interval = null;
  let isTime = true;
  
  if(isTime ){
    // console.log("enetr")
    interval = setInterval(() => {
      setstartTimer ((prev)=> prev-1);
      // setIstime(false);
      // console.log(timer);
  
    }, 1000);

    setTimeout(()=>{
      isTime = false;
      // console.log(isTime);
      setStartStopButtonActive(true);
      // setstartTimer(0);
      clearInterval(interval);
    },10000)



  }

  else{
    clearInterval(interval);
  }
  

  return()=>{
    clearInterval(interval);
  }

 
  
}
  

 //-------------getting access to microphone, browser and camera-----------------// 

  const getAccess = async () => {
    try {

      if (!browserSupportsSpeechRecognition) {
        console.log("browser doesnot support");
      }

      if (!isMicrophoneAvailable) {
        console.log("microphone not enabled")
      }

      const stream2 = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });

      console.log(stream);
      console.log(stream2);

      if(stream2){
        console.log("assigning stream")
        console.log(candidateVideo.current)
        console.log(candidateVideo.current.srcObject);
        // candidateVideo.current.srcObject = stream2;
      }
      
     
      // candidateVideo.current.srcObject = stream;
      // console.log(stream);
    } catch (error) {
      console.log("error in fetching video");
    }
  };


  //------------------

  const handleQuestionButtonClick = (questionIndex) => {
 
    setSelectedQuestion(questions[questionIndex]);
    // setQuestionNumber(questionIndex);
    setIsActive(false);
    
  };


  //------------fetching question data----------------//

  const loadData = async () => {  
    try {
      if (id) {
        // console.log("inside the displayQuestion endpoint");
        let response = await axios.post(
          "http://localhost:80/api/displayQuestions",
          {
            id: id,
            company: company,
          },
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // console.log(response.data);
        setQuestions(response.data.questions);
        setSelectedQuestion(response.data.questions[1]);
      }
    } catch (error) {}
  };

  //----------showing each button-----------------//

  

  useEffect(() => {
    let intervalId;
   
    const startInterval = () => {
     
      intervalId = setInterval(() => {
        // console.log(transcript);
        if (questions) {
          if (questionNumberRef.current === (TotalQuestions)) {
              clearInterval(intervalId); // Stop the interval when nextQuestionNumber reaches 20
              stopInterval();
              stopListening();
              
              
              navigate('/endInterview', {state: {urls: videoUrls, transcriptedText:transcriptedText}})
          } else {
            // console.log(questionNumberRef.current);
           
            questionNumberRef.current +=1;
            // console.log(isRecording);
         
          if(questionNumberRef.current > 0){
            startQuizztimer();
            handleQuestionButtonClick(questionNumberRef.current);
            startListening();
          }   
            
            if (!isRecording) {
              isRecording = true;
              startRecording(options);

             
            
            }

            

           

            setTimeout(()=>{
              if(isRecording){
                isRecording = false;
                // console.log(isRecording);
                stopRecording();
                stopquizTimer();
                resetTranscript();
                // console.log("resetting")
                saveTranscript();
              }
              
            },ansTime)






            // console.log(transcript);
            // console.log(transcriptedtext);
            // console.log(isRecording);
            // startListening(); // Call startListening at the beginning of each 5-second interval
          }
        }
      }, (ansTime+1000));

    
    };


  
  

    const stopInterval = () => {
      clearInterval(intervalId);
      setIsIntervalActive(false);
      stopRecording();
      stopListening(); // Stop recording at the end of the interval
      isRecording = false;
    };

    if (isIntervalActive) {
      // handleQuestionButtonClick(2);

      startInterval();
      // startTimer();
      // startListening();
    }

    return () => {
     
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [questions, isIntervalActive, stream]);







  //----------handling start stop functions-----------------//
  

  const handleStopStartButtonClick = () => {


    

    if(questionNumberRef.current < TotalQuestions){

      if(mediaBlobUrl){
        console.log(mediaBlobUrl)
      }

      if (!isIntervalActive) {
        questionNumberRef.current +=1;
        startListening();
        startRecording();
        startQuizztimer();
  
        // If the interval is active, immediately fetch the next question
        handleQuestionButtonClick(questionNumberRef.current);
      }
      if (isIntervalActive) {
       stopListening();
       stopRecording();
       stopquizTimer();
       resetTranscript();
       saveTranscript();
      }

     
      setIsIntervalActive(!isIntervalActive);

    }

    if(questionNumberRef.current === TotalQuestions  && isIntervalActive ){
              navigate('/endInterview', {state: {urls: videoUrls, transcriptedText:transcriptedText}})
            
    }

    
  
  };

  
  

  useEffect(() => {
    loadData();
    getAccess();
    startRecording();
    // startListening();
    firstTimer();
   
   
     
  }, []);

  return (
    <>
      {questions ? (
        <div className={styles.container}>
          <div className={styles.candidate_layout}>
            <div className={styles.question_btn}>
              {/* <div>{showButtons(1, 10)}</div>
          <div>{showButtons(11, 20)}</div> */}
              {Array.from({ length: noOfColumns }, (_, columnIndex) => (
                <div key={columnIndex}>
                  {Array.from(
                    { length: buttonsPerColumn },
                    (_, buttonIndex) => {
                      const questionIndex =
                        columnIndex * buttonsPerColumn + buttonIndex;
                      return (
                        <button
                          key={questionIndex}
                          onClick={() =>
                            handleQuestionButtonClick(questionIndex + 1)
                          }
                          disabled={!isActive}
                        >
                          {questionIndex + 1}
                        </button>
                        // <QuestionButton number ={questionIndex+1} onClick={handleQuestionButtonClick(questionIndex+1)} />
                      );
                    }
                  )}
                </div>
              ))}
              <div></div>
            </div>
            <div className={styles.candidate_side}>
            <p>Timer: {quizTimer} secs</p>
            {/* <p>{status}</p> */}
            
              <div className={`${styles.questionHead} ${styles.candiCom}` }>
              {/* Question {questionNumberRef.current} */}
               {questionNumberRef.current>0? <> Question {questionNumberRef.current}</>: <>Your quiz starts in {startTimer}</> }
              </div>
              <div className={styles.questions}>{questionNumberRef.current > 0 ? selectedQuestion : ""}</div>
              <div className={`${styles.equipBody} `}>
                <div></div>
                {/* <video src={mediaBlobUrl} style={{display:"block"}} controls autoPlay loop /> */}
                
                <video
                  ref={candidateVideo}
                  className={styles.candidate_video}
                  // audio ="false"
                  autoPlay
                  playsInline
                  style={{ transform: "scaleX(-1)" }}
                ></video>
                {/* {mediaBlobUrl} */}
                {mediaBlobUrl ? saveMedia(mediaBlobUrl):""}
                <div>{transcript}{transcript ? saveTranscript(transcript) : " "}</div>
              </div>
              <div>

                {startStopButtonActive?  <button onClick={handleStopStartButtonClick}>
                  {isIntervalActive ? "Stop" : "Start"}
                </button>:""}
               
                <p>Microphone : {listening ? "on": "off"}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading the questions"
      )}
    </>
  );
};

export default CandidateInterview;
