import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import styles from './CardStyledTable.module.css';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { OpeningCard } from '../../../components/JobOpeningTable/OpeningCard';
import { AddButton } from '../../../components/AddButton/AddButton';


export const JobOpenings = () => {

  const [jobOpenings, setJobOpenings] = useState({})


//   const fetchJobsList = async()=>{
//     let response = await axios.post('http://localhost:80/api/displayjoblist',{},{
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     })

//     console.log(response);
//     setJobOpenings(response);
// }


// useEffect(()=>{
//   fetchJobsList();

// },[])

  return (
    <>
    <NavigationBar/>
    {/* {jobOpenings ? <> <OpeningCard/></>:""} */}
   
    <AddButton side="HC"/>
    </>
  )
}
