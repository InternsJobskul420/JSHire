import React from 'react';
import styles from './JobOpeningForm.module.css';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';

export const JobOpeningForm = () => {
  return (
    <>
      <NavigationBar />
      <h1 className={styles.formHeading}>Add Opening</h1>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.column}>
            <div className={styles.formGroup}>
              <label htmlFor="job-role">Job Role </label>
              <select id="job-role" name="job-role" className={styles.select} required>
                <option value="" disabled hidden>Select</option>
                <option value="role1">Role 1</option>
                <option value="role2">Role 2</option>
                <option value="role3">Role 3</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="num-openings">Number of Openings </label>
              <input type="number" id="num-openings" name="num-openings" min="0" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="company-description">Job Description </label>
              <textarea
                id="company-description"
                name="company-description"
                required
                minLength="100"
              ></textarea>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.formGroup}>
              <label htmlFor="job-requirements">Job Requirements </label>
              <textarea id="job-requirements" name="job-requirements" required minLength="200"></textarea>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="basic-qualifications">Basic Qualifications </label>
              <textarea
                id="basic-qualifications"
                name="basic-qualifications"
                required
                minLength="200"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <button type="submit">Create Opening</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
