import React from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { InterviewSchedule } from '../../../components/InterviewSchedule/InterviewSchedule';
import { DisplayPdf } from '../../../components/DisplayPdf/DisplayPdf';
import styles from './ScheduleInterview.module.css';
import { useLocation } from 'react-router';

export const ScheduleInterview = () => {

  const location = useLocation();
  const {name , id, jobRole, company, applicationLink} = location.state



  return (
    <>
      <NavigationBar />
      <div className={styles.row}>
        <DisplayPdf name={name} />
        <InterviewSchedule name ={name} id={id} jobRole={jobRole} company={company} applicationLink={applicationLink} />
      </div>
    </>
  );
};
