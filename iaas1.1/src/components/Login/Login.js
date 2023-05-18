import React from 'react'

const Login = () => {
  return (
    <div className={styles.rightSide}>
    <div className={styles.textCenter}>
      <h1 className={`${styles.heading} ${styles.mb5}`}>Admin Console</h1>
    </div>
    <form>
      <div className={styles.mb4}>
        <label className={styles.label}>Email address</label>
        <input
          className={`${styles.inputField} ${styles.formControl}`}
          type="email"
          name="email"
        />
      </div>
      <div className={styles.mb4}>
        <label className={styles.label}>Password</label>
        <input
          className={`${styles.inputField} ${styles.formControl}`}
          type="password"
          name="password"
        />
      </div>
      <div className={`${styles.textCenter} ${styles.mb4}`}>
        <a href="!#" className={styles.myfont}>Forgot password?</a>
      </div>
      <div className={styles.textCenter}>
        <button type="submit" className={styles.submitBtn}>Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Login