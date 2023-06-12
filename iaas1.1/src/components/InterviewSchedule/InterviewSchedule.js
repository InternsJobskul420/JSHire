import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './InterviewSchedule.module.css';

export const InterviewSchedule = () => {
  const [interviewTitle, setInterviewTitle] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      interviewTitle: interviewTitle,
      interviewDate: interviewDate,
      interviewTime: interviewTime,
    };

    try {
      const response = await axios.post('http://localhost:80/api/scheduleInterview', {data : formData}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);

      if (response.data.success) {
        alert('Interview scheduled successfully');
        navigate('/success'); // Navigate to a success page or any other desired page
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while scheduling the interview');
    }
  };

  return (
    <form className={styles.InterviewScheduleForm}>
      <h2 className={styles.InterviewScheduleHeading}>Schedule Interview</h2>
      <div className={styles.InterviewScheduleGroup}>
        <label className={styles.InterviewScheduleLabel} htmlFor="interview-title">
          Enter Interview Title
        </label>
        <input
          className={styles.InterviewScheduleInput}
          type="text"
          id="interview-title"
          value={interviewTitle}
          onChange={(event) => setInterviewTitle(event.target.value)}
        />
      </div>
      <div className={styles.InterviewScheduleGroup}>
        <h3 className={styles.InterviewScheduleSubheading}>Stop Accepting Interview</h3>
        <div className={styles.InterviewScheduleInputGroup}>
          <div>
            <label className={styles.InterviewScheduleLabel}>Date</label>
            <input
              className={`${styles.InterviewScheduleInput} ${styles.InterviewScheduleDateInput}`}
              type="date"
              value={interviewDate}
              onChange={(event) => setInterviewDate(event.target.value)}
            />
          </div>
          <div>
            <label className={styles.InterviewScheduleLabel}>Time</label>
            <input
              className={`${styles.InterviewScheduleInput} ${styles.InterviewScheduleTimeInput}`}
              type="time"
              value={interviewTime}
              onChange={(event) => setInterviewTime(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.InterviewScheduleButtonGroup}>
        <button className={styles.InterviewScheduleCancelButton}>Canceled</button>
        <button className={styles.InterviewScheduleSubmitButton} onClick={handleSubmit}>
          Schedule Interview
        </button>
      </div>
    </form>
  );
};
