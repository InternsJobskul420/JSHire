import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from '../../../components/NavigationBar/NavigationBar'
import styles from './HiringCompanyForm.module.css'
import { useNavigate } from 'react-router-dom'

export const HiringCompnayForm = () => {


  const[credentials, setCredentials] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(credentials.companyName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:80/api/createhiringcompany', {
        companyName: credentials.companyName,
        description: credentials.description,
        email: credentials.email,
        phoneNo: credentials.phoneNo,
        password: credentials.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response);
  
      if (response.data.exist === 0) {
        
        alert('Email Already Exists');
      }
      else {
        alert('Successfully Created')
        navigate('/hiringcompany')
      }
      



    } catch (error) {
      alert('error in registration');
    }
  };


  return (
    <>
    <NavigationBar/>
    {/* <div className={styles.formContainer}>
      <h1 className={styles.formHead
        ing}>Create An Account</h1>
      <div className={styles.containerhcform}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="companyName">Company Description</label>
          <input type="text" id="companyDescription" className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
        className={styles.formInput}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className={styles.formInput} />
        </div>
        <button type="submit" className={styles.formButton}>Add Company</button>
      </form>
      </div>
    </div> */}
          <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.column}>
          <div className={styles.formGroup}>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" value={credentials.companyName} required className={styles.formInput} onChange={handleChange} />
        </div>
            <div className={styles.formGroup}>
              <label htmlFor="company-description">Company Description </label>
              <textarea
                id="company-description"
                name="description"
                value={credentials.description}
                required
                minLength="10"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className={styles.column}>
          <div className={styles.formGroup}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          id="quantity"
          name="phoneNo"
          value={credentials.phoneNo}
        className={styles.formInput}
        onChange={handleChange}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={credentials.email} required className={styles.formInput} onChange={handleChange}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"name="password" value={credentials.password} required className={styles.formInput} onChange={handleChange}/>
        </div>
            <div className={styles.formGroup}>
            <button type="submit" className={styles.formButton}>Add Company</button>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}