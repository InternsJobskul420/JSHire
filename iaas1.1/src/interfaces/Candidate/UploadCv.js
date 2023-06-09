import React from 'react';
import styles from './UploadCv.module.css';
import jobskulLogo from '../../assets/jobskulLogo.svg';

export const UploadCv = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={jobskulLogo} alt="Jobskul Logo" />
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h1>Junior Software Developer</h1>
            <p>Job ID: <span>12345</span></p>
            <h2>Company description</h2>
            <p>Company Name</p>
            <p>Sample company description</p>
            <h2>Job requirements</h2>
            <p>Sample job requirements</p>
            <h2>Basic qualifications</h2>
            <p>Sample basic qualifications</p>
          </div>
          <div className={styles.rightColumn}>
            <form>
              <label className={styles.label}>
                Name
                <input type="text" name="name" className={styles.input} />
              </label>
              <label className={styles.label}>
                Email
                <input type="email" name="email" className={styles.input} />
              </label>
              <label className={styles.label}>
                College name
                <input type="text" name="college" className={styles.input} />
              </label>
              <button className={styles.button}>Upload CV</button>
              <button className={styles.button}>Upload Profile Picture</button>
              <button type="submit" className={styles.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
