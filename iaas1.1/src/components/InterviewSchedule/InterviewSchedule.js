import React from 'react';
import styles from './InterviewSchedule.module.css';

export const InterviewSchedule = () => {
  return (
    <form className={styles.InterviewScheduleForm}>
      <h2 className={styles.InterviewScheduleHeading}>Schedule an interview</h2>
      <div className={styles.InterviewScheduleGroup}>
        <label className={styles.InterviewScheduleLabel} htmlFor="interview-title">Enter Interview Title</label>
        <input className={styles.InterviewScheduleInput} type="text" id="interview-title" />
      </div>
      <div className={styles.InterviewScheduleGroup}>
        <h3 className={styles.InterviewScheduleSubheading}>Stop Accepting Interview</h3>
        <div className={styles.InterviewScheduleInputGroup}>
          <div>
            <label className={styles.InterviewScheduleLabel}>Date</label>
            <input className={`${styles.InterviewScheduleInput} ${styles.InterviewScheduleDateInput}`} type="date" />
          </div>
          <div>
            <label className={styles.InterviewScheduleLabel}>Time</label>
            <input className={`${styles.InterviewScheduleInput} ${styles.InterviewScheduleTimeInput}`} type="time" />
          </div>
        </div>
      </div>
      <div className={styles.InterviewScheduleButtonGroup}>
        <button className={styles.InterviewScheduleCancelButton}>Canceled</button>
        <button className={styles.InterviewScheduleSubmitButton}>Schedule Interview</button>
      </div>
    </form>
  );
};
