import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UploadCv.module.css';
import jobskulLogo from '../../assets/jobskulLogo.svg';
import { useNavigate } from 'react-router-dom';

export const UploadCv = () => {
  const [credentialsStd, setCredentialsStd] = useState({});
  const [jobId, setJobId] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDetails, setJobDetails] = useState({});

  let navigate = useNavigate();
  console.log(credentialsStd);

  const extractJobIdAndCompanyName = (url) => {
    const parts = url.split('/');
    const jobId = parts[parts.length - 1];
    const companyName = parts[parts.length - 2];
    return { jobId, companyName };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentialsStd);
    try {
      console.log('inside handle submit');
      let response = await axios.post(
        'http://localhost:80/api/apply',
        {
          details: credentialsStd,
          jobId: jobId,
          companyName: companyName,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response);
      console.log(response.data.description);
      console.log(response.data.success);
      if (response.data.success == true) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompanyData = async () => {
    try {
      let response = await axios.post('http://localhost:80/api/fetchdetails');
      const { description, jobReq, basicQualif, jobRole } = response.data;

      // Update the state variables with the fetched data
      setJobDetails({ description, jobReq, basicQualif, jobRole });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setCredentialsStd((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log(currentUrl);

    const { jobId, companyName } = extractJobIdAndCompanyName(currentUrl);
    setJobId(jobId);
    setCompanyName(companyName);

    fetchCompanyData();
  }, []);

  console.log(jobId); // The extracted job ID
  console.log(companyName); // The extracted company name

  const { description, jobReq, basicQualif } = jobDetails;

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
            <h1>Job Role Name</h1>
            <p>Job ID: <span>{jobId}</span></p>
            <h2>{companyName} Description</h2>
            <p>{description}</p>
            <h2>Job requirements</h2>
            <p>{jobReq}</p>
            <h2>Basic qualifications</h2>
            <p>{basicQualif}</p>
          </div>
          <div className={styles.rightColumn}>
            <form onSubmit={handleSubmit}>
              <label className={styles.label}>
                Name
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  value={credentialsStd.name}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.label}>
                Email
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  value={credentialsStd.email}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.label}>
                College name
                <input
                  type="text"
                  name="college"
                  className={styles.input}
                  value={credentialsStd.collegeName}
                  onChange={handleChange}
                />
              </label>
              <button className={styles.button}>Upload CV</button>
              <button className={styles.button}>Upload Profile Picture</button>
              <button type="submit" className={styles.subButton}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
