import React from 'react';
import styles from './CandidateCard.module.css';

const CandidateCard = ({ name, college, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Candidate" className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.college}>{college}</p>
      <button className={styles.button}>See Details</button>
    </div>
  );
};

export default CandidateCard;
