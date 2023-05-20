import React, { useState } from 'react';
import styles from './OpeningCard.module.css';
import { FaTrash, FaEye } from 'react-icons/fa';

export const OpeningCard = () => {
  const [jobData, setJobData] = useState([
    {
      jobRole: 'Software Engineer',
      jobId: '1234',
      jobOpenings: 5,
      cvUploadLink: 'https://example.com/upload-cv',
    },
    {
      jobRole: 'Consultant',
      jobId: '5678',
      jobOpenings: 3,
      cvUploadLink: 'https://example.com/upload-cv',
    },
    {
      jobRole: 'Designer',
      jobId: '9876',
      jobOpenings: 2,
      cvUploadLink: 'https://example.com/upload-cv',
    },
  ]);

  const [activeCard, setActiveCard] = useState(null);

  const handleMenuClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null); // Close the menu if the clicked card is already active
    } else {
      setActiveCard(index);
    }
  };

  const handleRemoveCard = (index) => {
    const updatedJobData = [...jobData];
    updatedJobData.splice(index, 1);
    setJobData(updatedJobData);
  };

  return (
    <div className="adjust">
      <h1 className={styles.formHeading}>Openings at Accenture</h1>
      <div className={`${styles.row} row`}>
        {jobData.map((job, index) => (
          <div className="col-md-6" key={index}>
            <div
              className={`${styles.card} ${activeCard === index ? styles.active : ''}`}
              onClick={() => handleMenuClick(index)} // Close the menu when clicking on the card
            >
              <div className={styles.cardBody}>
                <div className={styles.cardOptions}>
                  <span className={styles.dots}></span>
                  <span className={styles.dots}></span>
                  <span className={styles.dots}></span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.leftColumn}>
                    <h5 className={styles.cardTitle}>{job.jobRole}</h5>
                    <p className={styles.cardText}>Job ID: {job.jobId}</p>
                    <p className={styles.cardText}>No. of Job Openings: {job.jobOpenings}</p>
                  </div>
                  <div className={styles.rightColumn}>
                    <p className={styles.cardText}>
                      CV Upload Link: <a href={job.cvUploadLink}>{job.cvUploadLink}</a>
                    </p>
                  </div>
                </div>
                {activeCard === index && (
                  <div className={styles.cardMenu}>
                    <span onClick={() => handleRemoveCard(index)}>
                      <FaTrash className={styles.menuIcon} />
                      Remove
                    </span>
                    <span>
                      <FaEye className={styles.menuIcon} />
                      View
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
