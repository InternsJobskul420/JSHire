import  React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { useState } from 'react'

const CandidateMessage = () => {


    const [selected, setSelected] = useState(false);
    const [header, setHeader] = useState("You've got this!");
    const [message, setMessage] = useState( "Believe in yourself and your abilities. Remember to present your qualifications, skills, and experiences with clarity and confidence. All the best.");
    const [page, setPage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const regex = /^\/(\d+)\/.*$/;
   
    const match = currentPath.match(regex);

    if (match && match[1]) {
        let number = parseInt(match[1]);
        setPage(number);

      }
  
      useEffect(()=>{

        if (page === 2) {
            console.log("Displaying message for number 2");
            setHeader()
           
          } else {
            console.log("Number is not 2");
            
          }

      },[])
    


  return (
    <>
    <div id="candidate-message-container">
      <div id="candidate-message">
        <div id="header">{props.header}</div>
        <div id="description">{props.message}</div>
        {props.page === 1 ? (
      <>
        
        <div style={{"padding": "2rem"}}>
          <input
            type="checkbox"
            
            checked={selected}
            onChange={handleRadioClick}
          />
          {props.agmnt}
        </div>
        <button 
          type="submit"
          onClick={handleNextButtonClick}
          disabled={!selected}
        >
          Next
        </button>
      </>
    ) : (
      <>
        
        <button >Timer</button>
        <p>{props.message}</p>
      </>
    )}
      </div>
    </div>
  </>
  )
}

export default CandidateMessage
