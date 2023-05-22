import React from 'react'
import React, { useState, useEffect } from "react";

import styles from  './CandidateQuestion.module.css';
import image from '../../Assest/video.svg'



const CandidateInterview = () => {
    const noOfQuestions = 20;
    const columnContainer = [];
    let TimeLimit = 30;
    const categoryname = "Software Developer";
  
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [questions, setQuestions] = useState(null);
    const [allQuestionsSet, setAllQuestionsSet] = useState(null);
    const [timer, setTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);
    const [recordingStatus, setRecordingStatus] = useState(false);
  
    for (let i = 1; i <= noOfQuestions; i++) {
      columnContainer.push(i);
    }
  
    const loadData = async () => {
      let response = await fetch("/api/displayQuestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      response = await response.json();
      // console.log(response[0][0].questions);
      // console.log(response[0]);
      // console.log(response[0][0].CategoryName);
      setQuestions(response[0]);
      console.log(response[0][0].questions);
      // setSelectedQuestion(response[0][0].questions);
    };
  
    //----------filtering category-----------------//
  
    let category = () => {
      let q = [];
      if (questions) {
        console.log(questions.length);
  
        questions.map((data) => {
          console.log(data.CategoryName);
          if (data.CategoryName === categoryname) {
            console.log("success");
            q.push(data.questions);
            // firstquestion= q[0][1]
            console.log(q);
            // console.log(firstquestion)
            setSelectedQuestion(q[0][1]);
            setQuestionNumber(1);
            //write choosing random question code here
          }
        });
      }
      setAllQuestionsSet(q);
    };
  
    //----------getting questions-----------------//
  
    let getQuestion = (questionIndex) => {
      // console.log(allQuestionsSet[0])
  
      console.log(questionIndex);
      Object.keys(allQuestionsSet[0]).map((Index) => {
        if (questionIndex == Index) {
          setSelectedQuestion(allQuestionsSet[0][Index]);
          setQuestionNumber(Index);
          setTimeLeft(TimeLimit);
          setTimer(TimeLimit);
          setRecordingStatus(true);
        }
      });
    };
  
    const nextQuestion = () => {
      setTimer(null);
      setRecordingStatus(false);
      const nextQuestionNumber = questionNumber + 1;
      if (nextQuestionNumber <= noOfQuestions) {
        getQuestion(nextQuestionNumber);
      } else {
        alert("Quiz complete!");
      }
    };
  
    //----------showing each button-----------------//
    const showButtons = (start, end) => {
      let slicedContainer = columnContainer.slice(start - 1, end);
  
      return slicedContainer.map((index) => {
        return (
          <div>
            <button key={index} className={styles.question_number} onClick={() => getQuestion(index)}>
              {index}
            </button>
          </div>
        );
      });
    };
  
    useEffect(() => {
      loadData();
    }, []);
  
    useEffect(() => {
      category();
      // firstQuestion();
      console.log(questions);
    }, [questions]);
  
    useEffect(() => {
      if (timer && timeLeft >= 0) {
        const intervalId = setInterval(() => {
          setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
      } else if (timer && timeLeft < 0) {
        nextQuestion();
      }
    }, [timer, timeLeft]);
  
    return (
      <div className={styles.container}>
        <div className={styles.candidate_layout}>
          <div className={styles.question_btn}>
            <div>{showButtons(1, 10)}</div>
            <div>{showButtons(11, 20)}</div>
          </div>
          <div className={styles.candidate_side}>
            <div className={`${styles.questionHead} ${styles.candiCom}`}>Question {questionNumber}</div>
            <div className={styles.questions}>{selectedQuestion}</div>
            <div className={`${styles.videoLayout}  ${styles.candiCom}`}><img src={image} className={styles.img} alt="video image"/></div>
          </div>
        </div>
      </div>
    );
}

export default CandidateInterview
