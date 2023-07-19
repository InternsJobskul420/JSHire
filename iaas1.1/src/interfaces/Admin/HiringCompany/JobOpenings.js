import React, { useEffect, useState } from 'react'
import axios from 'axios'
import sty from '../SuperUser/HiringCompany.module.css'; // Import the CSS module
// import styles from './CardStyledTable.module.css';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { OpeningCard } from '../../../components/JobOpeningTable/OpeningCard';
import { AddButton } from '../../../components/AddButton/AddButton';
import BreadcrumbNav from '../../../components/BreadcrumbNav/BreadcrumbNav'
import { useLocation } from 'react-router-dom';


export const JobOpenings = () => {

  const [jobOpenings, setJobOpenings] = useState(null)
  const [jobNo, setJobNo] = useState();

  const location = useLocation();
  const [name, setName] = useState(location.state.companyName)
  console.log(name);

  const fetchJobsList = async () => {


    try {
      console.log(name)
      let response = await axios.post('http://localhost:80/api/displayjoblist', {
        companyName: name
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      // console.log(response.data.data.length)
      // console.log(name.length)


      if (response.data.data === null) {
        setJobNo(1);
        console.log("no data found")
      }

      if (response.data.data) {
        console.log(response.data.jobs)
        setJobNo(response.data.jobs + 1)
        setJobOpenings(response.data.data)

      }





    } catch (error) {

      console.log("error encountered in fetching data");

    }

  }






  useEffect(() => {


    if (name) {
      fetchJobsList();
    }




  }, [])



  return (
    <>
      <NavigationBar />
      <BreadcrumbNav page={`Hiring Companies / ${name}`} />
      <h1 className={sty.formHeading}>Create Job Openings for {name}</h1>
      {jobOpenings ?
        jobOpenings.map((job, index) => {
          return (
            <OpeningCard
              key={index}
              companyName={name}
              jobRole={job.jobRole}
              jobId={job.jobId}
              NumOfOpenings={job.NumOfOpenings}
              link={job.link} />
          )
        })
        // jobOpenings.map((details)=>{
        //   return(<OpeningCard 
        //     jobRole = {details.jobRole}  
        //     jobId = {details._id}
        //     NumOfOpenings = {details.NumOfOpenings}
        //     basicQualif = {details.basicQualif}
        //     />)
        // })

        // jobOpenings.map((det, index)=>{
        //   return(
        //   <>
        //   <OpeningCard index={index} jobRole={det.jobRole}  jobId={det._id} jobOpenings={det.NumOfOpenings}/>
        //   </>
        //   )
        // })
        : "Create a job opening"}

      <AddButton side="HC" companyName={name} jobNo={jobNo} />
    </>
  )
}
