import React from 'react';
import styles from './HCCard.module.css';
import { useNavigate } from 'react-router-dom';

export const HCCard = (props) => {
  const navigate = useNavigate();

  const update =() =>{
    navigate('/updatehcaccount')
  }

  const addopening =() =>{
    navigate('/jobopening')
  }

  return (
    <div className={styles.hc} >
      {/* Container for the cross button */}
      <div className={styles.crossBtnContainer}>
        {/* Uncomment the following line to include an icon */}
        {/* <FaTimes className={styles.crossBtnIcon} /> */}
      </div>

      {/* Card body */}
      <div className={styles.cardBody} onClick={addopening}>
        <div className={styles.textCenter}>
          {/* Card title */}
          <p className={styles.cardTitle}>{props.CompanyName}</p>
          {/* Card subtitle */}
          <p className={styles.cardSubTitle}>Click on this card to add new job openings</p>
        </div>

        {/* Update button container */}
       
      </div>
      <div className={styles.updateBtnContainer}  onClick={update}>
          {/* Update button */}
          <button type="button" className={styles.updateBtn}>
            Edit Account
          </button>
        </div>
    </div>
  );
};