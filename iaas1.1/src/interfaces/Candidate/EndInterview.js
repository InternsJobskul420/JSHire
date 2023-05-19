import React from 'react'
import CandidateMessage from '../../components/CandidateMessage/CandidateMessage'
import { useLocation } from 'react-router-dom'

const EndInterview = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    const regex = /^\/(\d+)\/.*$/;
    let number;
    const match = currentPath.match(regex);
    console.log(match)
    console.log(match[1])

    if (match && match[1]) {
      number = parseInt(match[1]);
    }

    if (number === 2) {
      console.log("Displaying message for number 2");
      // Perform the desired action when the number is 2
    } else {
      console.log("Number is not 2");
      // Perform the desired action for numbers other than 2
    }
    
    console.log(currentPath)
   
  return (
    <div>
      helloooooooooooo
    </div>
  )
}

export default EndInterview
