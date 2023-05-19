import React from 'react'
import styles from './JobOpeningForm.module.css';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';

export const JobOpeningForm = () => {
  return (
    <>
    <NavigationBar/>
    <h1 className={styles.formHeading}>Add Opening</h1>
    <form>
      <div className="form-container">
        <div className="form-column">
          <label htmlFor="jobRole" className="form-label">Job Role</label>
          <input type="text" id="jobRole" className="form-input" />
        
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input type="text" id="companyName" className="form-input" />
        
          <label htmlFor="companyDescription" className="form-label">Company Description</label>
          <textarea id="companyDescription" className="form-input doubleHeight"></textarea>
        
          <label htmlFor="numberOfOpenings" className="form-label">Number of Openings</label>
          <input type="number" id="numberOfOpenings" className="form-input" />
        </div>
        
        <div className="form-column">
          <label htmlFor="jobDescription" className="form-label">Job Description</label>
          <textarea id="jobDescription" className="form-input doubleHeight"></textarea>
        
          <label htmlFor="jobRequirement" className="form-label">Job Requirement</label>
          <textarea id="jobRequirement" className="form-input doubleHeight"></textarea>
        
          <label htmlFor="basicQualification" className="form-label">Basic Qualification</label>
          <textarea id="basicQualification" className="form-input doubleHeight"></textarea>
        </div>
      </div>
      
      <button type="submit" className="form-button">Submit Now</button>
    </form>
    </>
  )
}
