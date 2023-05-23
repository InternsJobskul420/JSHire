import React from 'react'
import styles from './CandidateLayout.module.css'
const CandidateLayout = ({children}) => {
  return (
    <div>
      <div className={styles.candidate_message_container}>
      <div className={styles.bg}>
      <div className={styles.contain}>
        {children}
      </div>
      </div>
      </div>
    </div>
  )
}

export default CandidateLayout
