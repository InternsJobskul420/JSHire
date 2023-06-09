import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import styles from './JobOpeningForm.module.css';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';


export const JobOpeningForm = () => {


  const [jobDetails, setJobDetails] = useState({"jobId":0,"jobRole":"Software Engineer"})
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state.companyName;
  const jobNo = location.state.jobNo;
  // const jobNo = location.state.jobNo;
  console.log(name);
  console.log(jobNo);
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setJobDetails((prevData)=>({
      ...prevData,
      [name]:value,
    }))

    // console.log(jobDetails.jobRole);
    console.log(jobDetails);
  }


  //fetch data for roles

  

  const handleSubmit = async(e)=>{
    e.preventDefault()
    // console.log(jobDetails)
    console.log(name)
    if(name){

      let response = await axios.post('http://localhost:80/api/createnewjobopening', {
        company: name,
        jobNo: jobNo,
        job_details: jobDetails,
        jobId:jobDetails.jobId
    },{
      headers:{
        'Content-Type': 'application/json'
      }
    })

    console.log(response)

    if(response.data.success){
      alert("successfully created new opening");
      navigate('/jobopening',{state:{companyName : name}})
    }
    }
   

    

    

  }

  useEffect(() => {
    if (jobNo) {
      setJobDetails((prevData) => ({
        ...prevData,
        jobId: name+jobNo,
        link : `http://localhost:3000/apply/${name+jobNo}`
      }));

      console.log(jobDetails)
    }


  }, [jobNo]);


  return (
    <>
      <NavigationBar />
      <h1 className={styles.formHeading}>Add Opening</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.column}>
            <div className={styles.formGroup}>
              <label htmlFor="job-role">Job Role </label>
              <select id="job-role" name="jobRole"  className={styles.select} required onChange={handleChange}>
                <option value="" disabled hidden>Select</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Consultant">Consultant</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="num-openings">Number of Openings </label>
              <input type="number" id="num-openings" name="NumOfOpenings" value={jobDetails.NumOfOpenings} min="0" required onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="job-description">Job Description </label>
              <textarea
                id="company-description"
                name="jobDesc"
                required
                minLength="100"
                value={jobDetails.jobDesc}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.formGroup}>
              <label htmlFor="job-requirements">Job Requirements </label>
              <textarea id="job-requirements" name="jobReq" value={jobDetails.jobReq} required minLength="200" onChange={handleChange}></textarea>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="basic-qualifications">Basic Qualifications </label>
              <textarea
                id="basic-qualifications"
                name="basicQualif"
                value={jobDetails.basicQualif}
                required
                minLength="200"
                onChange={handleChange}
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
