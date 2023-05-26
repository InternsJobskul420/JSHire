import React, { useState } from 'react'
import NavigationBar from '../../../components/NavigationBar/NavigationBar'
import styles from './HiringCompanyForm.module.css'
import { useNavigate } from 'react-router-dom'

export const HiringCompnayForm = () => {

  const navigate= useNavigate();

  const [credentials, setCredentials] = useState({CompanyName:"", Email:"",PhoneNumber:"",Password:""});

  const handleSubmit = async(e)=>{
    e.preventDefault();
  //   const response = await fetch ("http:localhost:80/api/createhiringcompany",{
  //     method: 'POST',
  //           headers:{
  //               'Content-Type': 'application/json'
  //           },
  //           body:JSON.stringify({CompanyName:credentials.CompanyName, email:credentials.Email, phoneNumber:credentials.PhoneNumber, password:credentials.Password })
  //   });

  //   const json = await response.json()
  //   if(!json.success){
  //     alert("input valid credentials");
  //   }

  //   if(json.success){
  //     navigate("/hiringcompany");
  // }
  navigate('/hiringcompany')
  }

  const onChange =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  return (
    <>
    <NavigationBar/>
    <div className={styles.formContainer}>
      <h1 className={styles.formHeading}>Create An Account</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name='CompanyName' value={credentials.CompanyName} className={styles.formInput} onChange={onChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name='Email' value={credentials.Email} className={styles.formInput} onChange={onChange}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name='Password' value={credentials.Password} className={styles.formInput} onChange={onChange} />
        </div>
        <button type="submit" className={styles.formButton}>Add Company</button>
      </form>
    </div>
    </>
  )
}
