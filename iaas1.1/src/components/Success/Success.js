import React from 'react'
import CandidateLayout from '../CandidateLayout/CandidateLayout'
import CandidateShowMessage from '../CandidateShowMessage/CandidateShowMessage';


const Success = () => {

  const heading = "Success!";
  const description = "Your CV has been uploaded successfully";


  return (
    <CandidateLayout>
    <CandidateShowMessage header={heading} description={description} />
   
    
   
    
    </CandidateLayout>
  )
}

export default Success 