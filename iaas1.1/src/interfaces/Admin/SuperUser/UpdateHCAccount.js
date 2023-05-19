import React from 'react'
import NavigationBar from '../../../components/NavigationBar/NavigationBar'
import styles from './UpdateHCAccount.module.css'


const UpdateHCAccount = () => {
  return (
    <>
    <NavigationBar/>
    <div className={styles.formContainer}>
      <h1 className={styles.formHeading}>Create An Account</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className={styles.formInput} />
        </div>
        <div className={styles.stylingButton}>
        <button type="submit" className={styles.formUpdateButton}>Update</button>
        <button type="submit" className={styles.formDeactivateButton}>Deactivate</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default UpdateHCAccount