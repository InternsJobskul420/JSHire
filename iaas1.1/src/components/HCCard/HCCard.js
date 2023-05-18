import React from 'react';
import styles from './HCCard.module.css';

export const HCCard = () => {
  return (
    <div className={styles.hc}>
      {/* Container for the cross button */}
      <div className={styles.crossBtnContainer}>
        {/* Uncomment the following line to include an icon */}
        {/* <FaTimes className={styles.crossBtnIcon} /> */}
      </div>

      {/* Card body */}
      <div className={styles.cardBody}>
        <div className={styles.textCenter}>
          {/* Card title */}
          <p className={styles.cardTitle}>ACCENTURE</p>
          {/* Card subtitle */}
          <p className={styles.cardSubTitle}>Click on this card to add new job openings</p>
        </div>

        {/* Update button container */}
        <div className={styles.updateBtnContainer}>
          {/* Update button */}
          <button type="button" className={styles.updateBtn}>
            Edit Account
          </button>
        </div>
      </div>
    </div>
  );
};