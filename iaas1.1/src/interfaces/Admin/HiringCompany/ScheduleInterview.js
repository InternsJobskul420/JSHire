import React from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { InterviewSchedule } from '../../../components/InterviewSchedule/InterviewSchedule';
import { DisplayPdf } from '../../../components/DisplayPdf/DisplayPdf';
import styles from './ScheduleInterview.module.css';

export const ScheduleInterview = () => {
  return (
    <>
    <NavigationBar/>
      <div className={styles.row}>
        <DisplayPdf />
        <InterviewSchedule />
      </div>
    </>
  );
};
