import React from 'react';
import CandidateShowMessage from '../CandidateShowMessage/CandidateShowMessage';
import styles from './Success.module.css';

const Success = () => {
  const heading = "Success!";
  const description = "Your CV has been uploaded successfully.";

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <CandidateShowMessage header={heading} description={description} />
      </div>
    </div>
  );
};

export default Success;
