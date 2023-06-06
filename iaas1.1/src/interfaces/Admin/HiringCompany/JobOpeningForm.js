import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from './JobOpeningForm.module.css';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';


export const JobOpeningForm = () => {


  const [jobDetails, setJobDetails] = useState({})
  const navigate = useNavigate()

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setJobDetails((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }


  //fetch data for roles

  

  const handleSubmit = async(e)=>{
    e.preventDefault()
    let response = await axios.post('http://localhost:80/api/createnewjobopening', {
        details : jobDetails
    })

    if(response.data.success){
      alert("successfully created new opening");
      navigate('/jobopening')
    }

  }


  return (
    <>
      <NavigationBar />
      <h1 className={styles.formHeading}>Add Opening</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.column}>
            <div className={styles.formGroup}>
              <label htmlFor="job-role">Job Role </label>
              <select id="job-role" name="jobRole" className={styles.select} required>
                <option value="" disabled hidden>Select</option>
                <option value="role1">Role 1</option>
                <option value="role2">Role 2</option>
                <option value="role3">Role 3</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="num-openings">Number of Openings </label>
              <input type="number" id="num-openings" name="NumOfOpenings" min="0" required onClick={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="job-description">Job Description </label>
              <textarea
                id="company-description"
                name="jobDesc"
                required
                minLength="100"
                onClick={handleChange}
              ></textarea>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.formGroup}>
              <label htmlFor="job-requirements">Job Requirements </label>
              <textarea id="job-requirements" name="jobReq" required minLength="200" onClick={handleChange}></textarea>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="basic-qualifications">Basic Qualifications </label>
              <textarea
                id="basic-qualifications"
                name="basicQualif"
                required
                minLength="200"
                onClick={handleChange}
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
