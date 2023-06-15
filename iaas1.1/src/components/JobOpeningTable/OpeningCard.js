import React, { useState } from 'react';
import axios from 'axios'
import styles from './OpeningCard.module.css';
import { FaTrash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export const OpeningCard = (props) => {
  
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate()

  // console.log(props.companyName)

  const handleMenuClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null); // Close the menu if the clicked card is already active
    } else {
      setActiveCard(index);
    }
  };


  const viewCandidates=()=>{
    navigate('/viewcandidates',{state: {applicationLink :props.link, jobRole :props.jobRole, company:props.companyName}})
  }

  // const handleRemoveCard = (index) => {
  //   const updatedJobData = [...jobData];
  //   updatedJobData.splice(index, 1);
  //   setJobData(updatedJobData);
  // };

  const handleRemoveCard = async(index) =>{
    // const response = await axios.post('',{

    // })
  }

  return (
    <div className="adjust">
      
      <div className={`${styles.row} row`}>
        {
          <div className="col-md-6" key={props.index}>
            <div
              className={`${styles.card} ${activeCard === props.index ? styles.active : ''}`}
              onClick={() => handleMenuClick(props.index)} // Close the menu when clicking on the card
            >
              <div className={styles.cardBody}>
                <div className={styles.cardOptions}>
                  <span className={styles.dots}></span>
                  <span className={styles.dots}></span>
                  <span className={styles.dots}></span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.leftColumn}>
                    <h5 className={styles.cardTitle}>{props.jobRole}</h5>
                    <p className={styles.cardText}>Job ID: {props.jobId}</p>
                    <p className={styles.cardText} style={{"fontWeight": 600}}>No. of Job Openings: {props.NumOfOpenings}</p>
                  </div>
                  <div className={styles.rightColumn}>
                    <p className={styles.cardText}>
                      CV Upload Link: <Link to={`http://localhost:3000/apply/${props.companyName}/${props.jobId}`} >{props.link}</Link>
                    </p>
                  </div>
                </div>
                {activeCard === props.index && (
                  <div className={styles.cardMenu}>
                    <span onClick={handleRemoveCard(props.jobId)}>
                  <FaTrash className={styles.menuIcon} />
                  Remove
                </span>
                
                    <span >
                      <FaEye className={styles.menuIcon} />
                      <div onClick={viewCandidates}>View</div>
                      
                    </span>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
