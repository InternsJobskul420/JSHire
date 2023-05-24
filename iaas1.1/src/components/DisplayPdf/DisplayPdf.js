import React from 'react';
import styles from './DisplayPdf.module.css';

export const DisplayPdf = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardHeading}>Candidate Name's CV</h2>
      <div className={styles.pdfContainer}>
        <iframe
          src="https://nishitesh42.github.io/Docs/Nishitesh_CV.pdf#toolbar=0"
          width="100%"
          height="100%"
          title="CV"
          frameBorder="0"
        />
      </div>
    </div>
  );
};
