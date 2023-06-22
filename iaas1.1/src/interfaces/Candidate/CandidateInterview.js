import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import { useReactMediaRecorder } from 'react-media-recorder';

import styles from "./Candidate.module.css";
// import sampleimage from "../../assets/video.svg";
import { useLocation } from "react-router-dom";


const CandidateInterview = () => {






  const location = useLocation();
  const { id, company } = location.state;
  let stream;
  let isRecording = false;
  const numberOfQuestions = 20;
  const buttonsPerColumn = 10;
  const noOfColumns = Math.ceil(numberOfQuestions / buttonsPerColumn);
  const TotalQuestions = 3;


  const candidateVideo = useRef();
  const questionNumberRef = useRef(0);
  // const videoUrls= useRef({});
  // const storeVideoUrls = useRef({});
  const url = useRef();
  const videoUrls = useRef([])

  //------------useState variables-------------------------//
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [isIntervalActive, setIsIntervalActive] = useState(true);
  const [transcriptedtext, setTranscriptedText] = useState({});
  const [timer, setTimer] = useState(30);
  // const [recordedVideos, setRecordedVideos] = useState([]);


  //------------react-speech-recognition variables-------------------------//

  const { transcript,listening ,resetTranscript ,browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition({"1":""});
  const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening =()=> SpeechRecognition.stopListening();
  // const [timer, setTimer] = useState(30);
  const [intervalId, setIntervalId] = useState(null);
  // console.log(number);




  
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ video: true });

      // console.log(transcript);
      // console.log(transcriptedtext);
      // console.log(recordedVideos);

      


//----------formatting time ---------------------------//

 const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };


const saveMedia =(url)=>{

  // Create a download link
  console.log(questionNumberRef.current);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = `video_${questionNumberRef.current}.webm`;
  // downloadLink.click();
  // videoUrls.current.push(url);
  
  console.log(videoUrls);
  console.log(videoUrls.current);
  const prevQno = questionNumberRef.current - 1;
  let length = videoUrls.current.length;
  console.log(length);
  if(length>0){
    console.log(questionNumberRef);
    // console.log(storeVideoUrls.current[questionNumberRef.current]);
    console.log(videoUrls.current[length-1]);
  }
  
  // console.log(storeVideoUrls.current[questionNumberRef-1])

  if(videoUrls.current[length-1] !== url){
    videoUrls.current = [...videoUrls.current, url];
    // console.log(storeVideoUrls.current[questionNumberRef]);
    // storeVideoUrls.current[questionNumberRef] = url;
  }
  
  console.log(downloadLink);
  // console.log(storeVideoUrls.current);
  // Save the downloaded video URL
  // setRecordedVideos(prevVideos => [
  //   ...prevVideos,
  //   { questionNumber: questionNumberRef.current, url: mediaBlobUrl }
  // ]);


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

      stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });

      candidateVideo.current.srcObject = stream;
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
        console.log(transcript);
        if (questions) {
          if (questionNumberRef.current === (TotalQuestions+1)) {
              clearInterval(intervalId); // Stop the interval when nextQuestionNumber reaches 20
              stopInterval();
              stopListening();
          } else {
            // console.log(questionNumberRef.current);
           
            questionNumberRef.current +=1;
            // console.log(isRecording);
         
          if(questionNumberRef.current > 0)   
            handleQuestionButtonClick(questionNumberRef.current);
            if (!isRecording) {
              isRecording = true;
              startRecording();

             
            
            }

            

           

            setTimeout(()=>{
              if(isRecording){
                isRecording = false;
                // console.log(isRecording);
                stopRecording();
                resetTranscript();
              }
              
            },10000)






            // console.log(transcript);
            // console.log(transcriptedtext);
            // console.log(isRecording);
            // startListening(); // Call startListening at the beginning of each 5-second interval
          }
        }
      }, 11000);

    
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
  }, [questions, isIntervalActive]);







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
  
        // If the interval is active, immediately fetch the next question
        handleQuestionButtonClick(questionNumberRef.current);
      }
      if (isIntervalActive) {
       stopListening();
       stopRecording();
      }
      setIsIntervalActive(!isIntervalActive);

    }

    
  
  };

  
  

  useEffect(() => {
    loadData();
    getAccess();
    startRecording();
    startListening();
   
   
     
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
            <p>Timer: {formatTime(timer)} secs</p>
            {/* <p>{status}</p> */}
            
              <div className={`${styles.questionHead} ${styles.candiCom}` }>
              {/* Question {questionNumberRef.current} */}
               {questionNumberRef.current>0? <> Question {questionNumberRef.current}</>: <>Your quiz starts in </> }
              </div>
              <div className={styles.questions}>{questionNumberRef.current > 0 ? selectedQuestion : ""}</div>
              <div className={`${styles.equipBody} `}>
                <div></div>
                {/* <video src={mediaBlobUrl} style={{display:"block"}} controls autoPlay loop /> */}
                
                <video
                  ref={candidateVideo}
                  className={styles.candidate_video}
                  autoPlay
                  playsInline
                  style={{ transform: "scaleX(-1)" }}
                ></video>
                {/* {mediaBlobUrl} */}
                {mediaBlobUrl ? saveMedia(mediaBlobUrl):"saving Media"}
                <div>{transcript}</div>
              </div>
              <div>
                <button onClick={handleStopStartButtonClick}>
                  {isIntervalActive ? "Stop" : "Start"}
                </button>
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
