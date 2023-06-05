import React, { useState } from "react";
import axios from "axios";
import styles from "../../../components/Login/Login.module.css";
import { useNavigate } from "react-router-dom";

const LoginSU = () => {
  const [credentialsSU, setCredentialsSU] = useState({});

  let navigate = useNavigate();
  console.log(credentialsSU);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentialsSU)
    try {
      console.log("inside handle submit");
      let response = await axios.post("http://localhost:80/api/loginSU",
        {
          username: credentialsSU.username,
          password: credentialsSU.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      console.log(response.data);
      console.log(response.data.success);
      if(response.data.success == true){
        navigate('/hiringcompany')
      }

      else {
        alert("wrong credentials")
      }


       

    } catch (error) {
      console.log(error);
    }

  
  };

  // const test = () => {
  //   console.log("test");
  // };

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setCredentialsSU((prevData) => ({
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
            <label htmlFor="email">User Name</label>
            <input
              type="email"
              id="email"
              name="username"
              value={credentialsSU.username}
              className={styles.roundedInput}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentialsSU.password}
              className={styles.roundedInput}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.roundedButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSU;
