import React from 'react'
import styles from './JobOpeningForm.module.css';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';

export const JobOpeningForm = () => {
  return (
    <>
    <NavigationBar/>
    <h1 className={styles.formHeading}>Add Opening</h1>
    <form>
      <div className="form-HCcontainer">
        <div className="column1">
          <label htmlFor="jobRole">Job Role</label>
          <input type="text" id="jobRole" className="inputFieldHC" />
        
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" className="inputFieldHC" />
        
          <label htmlFor="companyDescription">Company Description</label>
          <textarea id="companyDescription" className="inputFieldBigHC"></textarea>
        
          <label htmlFor="numberOfOpenings">Number of Openings</label>
          <input type="number" id="numberOfOpenings" className="inputFieldHC" />
        </div>
        
        <div className="column2">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea id="jobDescription" className="inputFieldBigHC"></textarea>
        
          <label htmlFor="jobRequirement">Job Requirement</label>
          <textarea id="jobRequirement" className="inputFieldBigHC"></textarea>
        
          <label htmlFor="basicQualification">Basic Qualification</label>
          <textarea id="basicQualification" className="inputFieldBigHC"></textarea>
          
          <button type="submit" className="btn">Submit Now</button>
        </div>
      </div>
      </form>
    </>
  )
}
