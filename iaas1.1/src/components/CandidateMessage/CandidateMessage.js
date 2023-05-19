// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom'

// const CandidateMessage = (props) => {

    
//   return (
//     <>
//       <div id="candidate-message-container">
//         <div id="candidate-message">
//           <div id="header">{props.header}</div>
//           <div id="description">{props.message}</div>
//           {props.page === 1 ? (
//         <>
          
//           <div style={{"padding": "2rem"}}>
//             <input
//               type="checkbox"
              
//               checked={selected}
//               onChange={handleRadioClick}
//             />
//             {props.agmnt}
//           </div>
//           <button 
//             type="submit"
//             onClick={handleNextButtonClick}
//             disabled={!selected}
//           >
//             Next
//           </button>
//         </>
//       ) : (
//         <>
          
//           <button >Timer</button>
//           <p>{props.message}</p>
//         </>
//       )}
//         </div>
//       </div>
//     </>
//   );
//       };

// export default CandidateMessage;
// // className={`${selected? styles.recordButton:''}`}
