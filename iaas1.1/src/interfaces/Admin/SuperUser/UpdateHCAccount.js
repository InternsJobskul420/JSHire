import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from '../../../components/NavigationBar/NavigationBar'
import styles from './UpdateHCAccount.module.css'


const UpdateHCAccount = () => {
  const location = useLocation();
  const name = location.state.companyName;
  const testname = "cognizant"
  console.log(name)
  const [companyname, setCompanyName] = useState(null);
  const [companydetails, setCompanyDetails] = useState({});
  
  console.log(companyname);

  

  const handleChange = (event) => { 
    const { name, value } = event.target;
    setCompanyDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(companydetails);
  };


const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log("hi");

  try {
    console.log("inside fetch")

    if(companyname){
      let response = await axios.post('http://localhost:80/api/updatecompanydata',{
     updatedCredentials: testname
  },{
    headers: {
      'Content-Type': 'application/json'
    }
  })

  console.log(companydetails)
  if(response.data.success){
    alert("updated successfully")
  }

    }

    

 

    
  } catch (error) {
    console.log("error with the code");
  }

  
}

const updateData =async()=>{

  // console.log(companyname)
  // setTimeout(()=>{
  //   console.log(companydetails)
  // }, 3000)

  console.log("hi")

}
 


  const getDetails= async()=>{

    try {
      console.log(companyname)
      console.log("inside getdetails")
      console.log(name)
      if(companyname){
        const details = await axios.post('http://localhost:80/api/companydetails', {
          companyName:name,        
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        console.log(details);
        console.log(details.data);
        setCompanyDetails(details.data);
      }
     
      
    } catch (error) {
      console.log("error in fetching company details");
    }
        
  }
useEffect(()=>{
  
  // if(location.state.companyName){
  //   console.log("com")
    // setCompanyName(location.state.companyName);
   
    if(name){
      setCompanyName(name);
      getDetails();
    }
   
  // }
 
},[companyname]);

  

  return (
    <>
    <NavigationBar/>
    <div className={styles.formContainer}>{
      
      companydetails  ? <> <h1 className={styles.formHeading}>Update {companyname} Account</h1>
      <form className={styles.form} onSubmit={handleSubmit} >
        <div className={styles.formGroup}>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" value={companydetails.companyName } className={styles.formInput} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="company_description">Description</label>
          <textarea type="text" name="description"  value={companydetails.description} className={styles.formInput} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={companydetails.email} className={styles.formInput} onChange={handleChange}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className={styles.formInput} onChange={handleChange}/>
        </div>
        <div className={styles.stylingButton}>
        <button type="submit" className={styles.formUpdateButton} onClick={updateData}>Update</button>
        <button type="submit" className={styles.formDeactivateButton}>Deactivate</button>
        </div>
      </form></>:<div>Loading details</div>
      
    }
     
    </div>
    </>
  )
}

export default UpdateHCAccount