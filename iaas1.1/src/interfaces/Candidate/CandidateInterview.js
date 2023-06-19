import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Candidate.module.css";
import sampleimage from "../../assets/video.svg";
import { useLocation } from "react-router-dom";
import QuestionButton from "../../components/QuestionButton/QuestionButton";

const CandidateInterview = () => {
  const location = useLocation();
  const { id, company } = location.state;

  const numberOfQuestions = 20;
  const buttonsPerColumn = 10;
  const noOfColumns = Math.ceil(numberOfQuestions / buttonsPerColumn);

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState(null);
  const [isActive, setIsActive] = useState(true);
  
  const getVideo =()=>{

  }


  const handleQuestionButtonClick = (questionIndex) => {
    console.log(questionIndex);
    setSelectedQuestion(questions[questionIndex]);
    setQuestionNumber(questionIndex);
    console.log(questions[questionIndex]);
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
    loadData();
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
                          // disabled={!isActive || questionNumber !== questionIndex + 1}
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
                Question  {questionNumber}
              </div>
              <div className={styles.questions}>{selectedQuestion}</div>
              <div className={`${styles.equipBody} `}>
                {/* <video ref={candidatevideo} className={styles.candidate_video} autoPlay playsInline  ></video> */}
              </div>
              <div>
                <button>Stop</button>
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
