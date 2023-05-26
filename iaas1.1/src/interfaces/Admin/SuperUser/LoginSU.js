import React from 'react'
import styles from '../../../components/Login/Login.module.css'
import { useNavigate } from 'react-router-dom'

const LoginSU = () => {

  const navigate = useNavigate();

  const authenticate = ()=>{
      navigate('../hiringcompany')
  }

  return (
    <div className={styles.loginContainer}>
    <div className={styles.leftColumn}>
      <h1 className={styles.welcomeText}>Welcome to JobskulHire</h1>
    </div>
    <div className={styles.rightColumn}>
      <h2 className={styles.formHeading}>Admin Console</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="email">User Name</label>
          <input type="email" id="email" className={styles.roundedInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className={styles.roundedInput} />
        </div>
        <button type="submit" className={styles.roundedButton} onClick={authenticate}>Login</button>
      </form>
    </div>
  </div>
  )
}

export default LoginSU
