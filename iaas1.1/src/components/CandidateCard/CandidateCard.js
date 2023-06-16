import React, { useEffect, useState } from 'react';
import styles from './CandidateCard.module.css';
import CopyLinkComponent from '../CopyLinkComponent/CopyLinkComponent';
import { useLocation, useNavigate } from 'react-router-dom';


const CandidateCard = ({ name, college, imageUrl, id, jobRole,company, applicationLink, interviewLink}) => {

    const location = useLocation();
    const [Link, setInterviewLink] = useState(interviewLink);
   
    // console.log(imageUrl)
    // const formattedImagePath = imageUrl.replace(/\\/g, '/');
    const navigate = useNavigate();
    // console.log(interviewLink);
    // console.log(formattedImagePath);


    const handleDetails =()=>{
    navigate('/scheduleinterview',{state: { name : name, id:id,company:company, jobRole:jobRole, applicationLink:applicationLink}})
    }


    useEffect(()=>{
      if(interviewLink)
      setInterviewLink(interviewLink)
    },[])


  return (
    <div className={styles.card}>
      <p className={styles.college}>ID:{id}</p>

      <img   className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      
      <p className={styles.college}>{college}</p>
     
      
      <button className={styles.button} onClick={handleDetails}>See Details</button>
      {interviewLink ? <CopyLinkComponent link={Link} />:""}
    </div>
  );
};



// const App = () => {
//   const candidates = [
//     {
//       name: 'Nishitesh Padhi',
//       college: 'XIM University',
//       imageUrl: '',
//     },
//     {
//       name: 'John Doe',
//       college: 'ABC University',
//       imageUrl: '',
//     },
//     // Add more candidate objects as needed
//   ];

//   return (
//     <div className={styles.container}>
//       {candidates.map((candidate, index) => (
//         <CandidateCard
//           key={index}
//           name={candidate.name}
//           college={candidate.college}
//           imageUrl={candidate.imageUrl}
//         />
//       ))}
//     </div>
//   );
// };

export default CandidateCard;
