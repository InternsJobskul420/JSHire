import React from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import CandidateCard from '../../../components/CandidateCard/CandidateCard';
import styles from './ViewCandidates.module.css'; // Import the CSS module

export const ViewCandidates = () => {
  return (
    <>
      <NavigationBar />
      <h1 className={styles.formHeading}>Candidate Profiles</h1>
      <div className={styles['display-cards']}>
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </div>
    </>
  );
};
