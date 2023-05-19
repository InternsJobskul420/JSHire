import React from 'react'
import './CandidateShowMessage.css'

const CandidateShowMessage = (props) => {
  return (
    <>
     
        <div id="candidate-message">
          <div id="header">{props.header}</div>
          <div id="description">{props.description}</div>
        </div>
    
    </>
  )
}

export default CandidateShowMessage
