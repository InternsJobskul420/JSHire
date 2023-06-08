import React, { useState } from "react";
import axios from "axios";
import styles from '../../../components/Login/Login.module.css'
import { useNavigate } from "react-router-dom";

const LoginHC = () => {
  const [credentialsHC, setCredentialsHC] = useState({});

  let navigate = useNavigate();
  console.log(credentialsHC);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentialsHC)
    try {
      console.log("inside handle submit");
      console.log(credentialsHC.email)
      let response = await axios.post("http://localhost:80/api/loginHC",
        {
          email: credentialsHC.email,
          password: credentialsHC.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      console.log(response.data);
      console.log(response.data.exist);
      if (response.data.exist === 0 ) {
        alert("Company Doesn't Exist!")
      }
      else{
        if(response.data.exist === 1 ) {
          navigate('/jobopening')
        }
      } 

    } catch (error) {
      console.log(error);
    }


  };

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setCredentialsHC((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // console.log(credentialsSU);
  };


  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftColumn}>
        <h1 className={styles.welcomeText}>Welcome to JobskulHire</h1>
      </div>
      <div className={styles.rightColumn}>
        <h2 className={styles.formHeading}>Admin Console</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className={styles.roundedInput} value={credentialsHC.email}
              onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className={styles.roundedInput} value={credentialsHC.password}
              onChange={handleChange} />
          </div>
          <button type="submit" className={styles.roundedButton} >Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginHC
