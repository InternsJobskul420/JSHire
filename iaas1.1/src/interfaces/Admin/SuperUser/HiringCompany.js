import React, { useEffect, useState } from 'react';
import axios from 'axios'
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import BreadcrumbNav from '../../../components/BreadcrumbNav/BreadcrumbNav';
import { HCCard } from '../../../components/HCCard/HCCard';
import styles from './HiringCompany.module.css'; // Import the CSS module
import { AddButton } from '../../../components/AddButton/AddButton';

export const HiringCompany = () => {

  const [hiringCompanies, setHiringCompanies] = useState([])
  
    const loadData = async () => {
      try {
        let response = await axios.post('http://localhost:80/api/displayhiringcompanies', {}, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        // console.log(response.data);
        setHiringCompanies(response.data);
      } catch (error) {
        console.error(error);
      }
    };


  useEffect(()=>{
    loadData();
  },[])



  return (
    <>
      <NavigationBar />
      <BreadcrumbNav routes={[
      { path: '/hiringcompany', label: 'Hiring Companies' }
    ]} />
      <h1 className={styles.formHeading}>Create An Account</h1>
      <div className={styles['display-cards']}>

        {hiringCompanies ? hiringCompanies.map((companies,index)=>{
          return(
            <HCCard CompanyName={companies.companyName} key={index}/>
          )
        }):""}
        <AddButton side="SU"/>
      </div>
    </>
  );
};
