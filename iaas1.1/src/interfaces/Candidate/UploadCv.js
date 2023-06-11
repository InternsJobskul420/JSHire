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
  const currentUrl = window.location.href;
  // console.log(currentUrl);
  // console.log(credentialsStd);

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

      const formData = new FormData();
    formData.append('name', credentialsStd.name);
    formData.append('email', credentialsStd.email);
    formData.append('collegeName', credentialsStd.college);
    formData.append('cv', credentialsStd.cv);
    formData.append('profilePic', credentialsStd.profile);

    formData.append('jobRole', jobDetails.jobRole);
    formData.append('link', window.location.href);

      // let response = await axios.post(
      //   'http://localhost:80/api/UploadCv',
      //   {
      //     formData
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   }
      // );

      // console.log(response);
      // console.log(response.data.description);
      // console.log(response.data.success);
      // if (response.data.success == true) {
      //   navigate('/');
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompanyData = async () => {
    // console.log(jobId)
    try {
      let response = await axios.post('http://localhost:80/api/fetchcompanydata',{
        jobId: jobId,
        name:companyName,
        jobdetails:jobDetails

      });
      const { CD,JobRole,JD, BQ, JR } = response.data;

      // Update the state variables with the fetched data
      setJobDetails({ CD,JobRole, JD, BQ, JR });
    } catch (error) {
      console.log(error);
    }
  };

  const test =()=>{
    console.log(jobDetails)
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (files) {
      setCredentialsStd((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setCredentialsStd((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    

    if(currentUrl){
    const parts = currentUrl.split('/');
    const Id = parts[parts.length - 1];
    const name = parts[parts.length - 2];
    setJobId(Id)
    setCompanyName(name);
    }

    if(jobId){
      fetchCompanyData();
    }
    

    
  }, [jobId]);

  // console.log(jobId); // The extracted job ID
  // console.log(companyName); // The extracted company name

  // const { description, jobReq, basicQualif } = jobDetails;

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={jobskulLogo} alt="Jobskul Logo" />
        </div>
      </nav>

      {jobDetails?<div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            {test()}
            <h1>{jobDetails.JobRole}</h1>
            <p>Job ID: <span>{jobId}</span></p>
            <h2>{companyName} Description</h2>
            <p>{jobDetails.CD}</p>
            <h2>Job Description</h2>
            <p>{jobDetails.JD}</p>
            <h2>Job requirements</h2>
            <p>{jobDetails.JR}</p>
            <h2>Basic qualifications</h2>
            <p>{jobDetails.BQ}</p>
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

              <label for="cv">
                Upload your CV
                <input type='file' name='cv' onChange={handleChange} placeholder='CV' ></input></label>
              
                <label for="profile">
                Upload your Profile Picture
                <input type='file' name='profile' onChange={handleChange} placeholder='Profile' ></input></label>
              {/* <button className={styles.button}>Upload CV</button>
              <button className={styles.button}>Upload Profile Picture</button> */}
              <button type="submit" className={styles.subButton}>Submit</button>
            </form>
          </div>
        </div>
      </div> :""}
      
    </div>
  );
};
