import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UploadCv.module.css";
import jobskulLogo from "../../assets/jobskulLogo.svg";
import { useNavigate } from "react-router-dom";

export const UploadCv = () => {
  const [credentialsStd, setCredentialsStd] = useState({});
  const [jobId, setJobId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDetails, setJobDetails] = useState({});
  const [subActive, setsubActive] = useState(true);
  const [message, setMessage] = useState("");

  let navigate = useNavigate();
  let currentUrl = window.location.href;
  console.log(currentUrl)
  if (currentUrl.includes('%')){
    currentUrl = currentUrl.replace(/%/g, ' ');
    currentUrl = currentUrl.replace(/20/g, '');
    // console.log(Id)
  }
  // currentUrl = currentUrl.toString();
  console.log(currentUrl)
  const pdfMaxSizeInBytes = 2 * 1024 * 1024; // 10MB
  // console.log(currentUrl);
  // console.log(credentialsStd);

 

  const extractJobIdAndCompanyName = (url) => {
    const parts = url.split("/");
    const jobId = parts[parts.length - 1];

    const companyName = parts[parts.length - 2];
    return { jobId, companyName };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentialsStd);
    try {
      console.log("inside handle submit");

 
      const formData = new FormData();
      formData.append("name", credentialsStd.name);
      formData.append("email", credentialsStd.email);
      formData.append("collegeName", credentialsStd.college);
      formData.append("cv", credentialsStd.cv);
      formData.append("profilePic", credentialsStd.profile);
      formData.append("jobRole", jobDetails.JobRole);
      console.log(currentUrl);
      formData.append("link", currentUrl);
      formData.append("company", companyName);
      formData.append("jobId", jobId);


      



      let response = await axios.post(
        "http://localhost:80/api/candidateupload",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      console.log(response.data.success);
      if (response.data.success == true) {
        navigate("/success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompanyData = async () => {
    // console.log(jobId)
    try {
      let response = await axios.post(
        "http://localhost:80/api/fetchcompanydata",
        {
          jobId: jobId,
          name: companyName,
          jobdetails: jobDetails,
        }
      );
      const { CD, JobRole, JD, BQ, JR } = response.data;

      // Update the state variables with the fetched data
      setJobDetails({ CD, JobRole, JD, BQ, JR });
      
    } catch (error) {
      console.log(error);
    }
  };

  // const test = () => {
  //   console.log(jobDetails)
  // }

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
     

      const pdfFile = e.target.files[0];
      console.log(pdfFile);
   
    console.log(pdfMaxSizeInBytes)
    console.log(pdfFile.size);


      if (pdfFile && pdfFile.size <= pdfMaxSizeInBytes) {
        setCredentialsStd((prevData) => ({
          ...prevData,
          [name]: files[0],
        }));

        console.log(credentialsStd.cv);

        if( credentialsStd.cv && credentialsStd.cv.size <= pdfMaxSizeInBytes){
          console.log("yes")
          console.log(subActive)
          setMessage("");
          setsubActive(false);
        }

        
      } else {
        
        // Show an error message or perform any other desired action
        console.log(`File size exceeds the limit ${pdfMaxSizeInBytes} `);
        const uploadmessage = `File size exceeds the limit ${pdfMaxSizeInBytes/(1024*1024)} MB`;
        setMessage(uploadmessage);
      }

    } else {
      setCredentialsStd((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }





  };

  useEffect(() => {
    if (currentUrl) {
      const parts = currentUrl.split("/");
      // console.log(parts);
      let Id = parts[parts.length - 1];
      // console.log(Id);
      if (Id.includes('%')){
        Id = Id.replace(/%/g, ' ');
        Id = Id.replace(/20/g, '');
        // console.log(Id)
      }

      console.log(Id);
      setJobId(Id)

      let name = parts[parts.length - 2];
      // console.log(name);
      if (name.includes('%')){
        name = name.replace(/%/g, ' ');
        name = name.replace(/20/g, '');
        // console.log(name)
      }
      setJobId(Id);
      setCompanyName(name);
    }

    if (jobId) {
      // console.log("hello");
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

      {jobDetails ? (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <h1>{jobDetails.JobRole}</h1>
              <p>
                Job ID: <span>{jobId}</span>
              </p>
             
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
                  Upload your CV (pdf) 
                  
                  <p style={{"color": "red"}}>{message}</p> 
                  <input
                    type="file"
                    name="cv"
                    onChange={handleChange}
                    placeholder="CV"
                    accept="application/pdf"
                  ></input>
                </label>

                <label for="profile">
                  Upload your Profile Picture (jpg,jpeg,png)
                  <input
                    type="file"
                    name="profile"
                    onChange={handleChange}
                    placeholder="Profile"
                    accept="image/png,image/jpg,image/jpeg"
                  ></input>
                </label>
                {/* <button className={styles.button}>Upload CV</button>
              <button className={styles.button}>Upload Profile Picture</button> */}
              {subActive}
                <button disabled={subActive} type="submit" className={styles.subButton}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
