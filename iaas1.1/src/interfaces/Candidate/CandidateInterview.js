import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import styles from "./Candidate.module.css";
// import sampleimage from "../../assets/video.svg";
import { useLocation } from "react-router-dom";
import QuestionButton from "../../components/QuestionButton/QuestionButton";

const CandidateInterview = () => {
  const location = useLocation();
  const { id, company } = location.state;
  let stream;
  let nextQuestionNumber = 1;
  const numberOfQuestions = 20;
  const buttonsPerColumn = 10;
  const noOfColumns = Math.ceil(numberOfQuestions / buttonsPerColumn);
  const candidateVideo = useRef();
  const numberRef = useRef();
  const testRef = useRef(1);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [isIntervalActive, setIsIntervalActive] = useState(true);
  const [transcriptedtext, setTranscriptedText] = useState();
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening =()=> SpeechRecognition.stopListening();
  // console.log(number);
  
console.log(transcript);
  

  const getAccess = async () => {




    try {

      if (!browserSupportsSpeechRecognition) {
        console.log("null");
      }

      stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      candidateVideo.current.srcObject = stream;
      console.log(stream);
    } catch (error) {
      console.log("error in fetching video");
    }
  };

  const handleQuestionButtonClick = (questionIndex) => {
    // console.log(questionIndex);
    setSelectedQuestion(questions[questionIndex]);
    setQuestionNumber(questionIndex);
    setIsActive(false);
    // setTimeout(() => {
    //   setQuestionNumber(questionIndex + 1);
    //   setIsActive(true);
    //   setSelectedQuestion(questions[questionIndex+1]);
    // }, 3000);
    // console.log(questions[questionIndex]);
  };

  const loadData = async () => {
    try {
      if (id) {
        console.log("inside the displayQuestion endpoint");
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

        console.log(response.data);
        setQuestions(response.data.questions);
        setSelectedQuestion(response.data.questions[1]);
      }
    } catch (error) {}
  };

  //----------showing each button-----------------//

  

  useEffect(() => {
    let intervalId;

    const startInterval = () => {
      console.log(questionNumber);
      intervalId = setInterval(() => {
        console.log(transcript);
        if (questions) {
          if (questionNumber === 21 || numberRef.current === 21) {
            // clearInterval(intervalId); // Stop the interval when nextQuestionNumber reaches 20
            // stopListening();
            stopInterval();
          } else {
            testRef.current +=1; 
            console.log("questionNumber:",questionNumber);
            console.log("numberRef: ",numberRef.current);
            console.log("testRef: ",testRef.current);
            if (numberRef.current) {
              setQuestionNumber(numberRef.current);
              nextQuestionNumber = numberRef.current;
              numberRef.current = nextQuestionNumber + 1;
              
            } else {
              nextQuestionNumber = nextQuestionNumber + 1;
              setQuestionNumber(nextQuestionNumber);
              console.log(nextQuestionNumber);
            }

            handleQuestionButtonClick(nextQuestionNumber);
            // startListening(); // Call startListening at the beginning of each 5-second interval
          }
        }
      }, 10000);

      // Call stopListening at the end of each 5-second interval
  // setTimeout(() => {
  //   stopListening();
  // }, 10000);
    };

    const stopInterval = () => {
      clearInterval(intervalId);
      setIsIntervalActive(false);
    };

    if (isIntervalActive) {
      // handleQuestionButtonClick(2);

      startInterval();
      // startListening();
    }

    return () => {
      // stopListening();
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [questions, isIntervalActive]);

  const handleStopStartButtonClick = () => {
    nextQuestionNumber = questionNumber + 1;
    // setQuestionNumber(nextQuestionNumber);
    console.log(nextQuestionNumber);
    numberRef.current = nextQuestionNumber;
    console.log(numberRef.current);
    setIsIntervalActive(!isIntervalActive);
    console.log(questionNumber);
  };

  useEffect(() => {
    loadData();
    getAccess();
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
              <div className={`${styles.questionHead} ${styles.candiCom}`}>
                Question {questionNumber}
              </div>
              <div className={styles.questions}>{selectedQuestion}</div>
              <div className={`${styles.equipBody} `}>
                <div></div>
                <video
                  ref={candidateVideo}
                  className={styles.candidate_video}
                  autoPlay
                  playsInline
                  style={{ transform: "scaleX(-1)" }}
                ></video>
                <div>hello{transcript}</div>
              </div>
              <div>
                <button onClick={handleStopStartButtonClick}>
                  {isIntervalActive ? "Stop" : "Start"}
                </button>
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
