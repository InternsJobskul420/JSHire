import React, { useState } from 'react';
import styles from './CandidateCard.module.css';

const CandidateCard = ({ name, college, imageUrl, onClick }) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Candidate" className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.college}>{college}</p>
      <button className={styles.button} onClick={handleButtonClick}>
        See Details
      </button>
    </div>
  );
};

const App = () => {
  const [navigateTo, setNavigateTo] = useState(null); // State to store the destination URL

  const handleButtonClick = () => {
    // Define the function to handle the button click event
    // Update the state to trigger navigation
    setNavigateTo('/scheduleinterview');
  };

  const candidates = [
    {
      name: 'Nishitesh Padhi',
      college: 'XIM University',
      imageUrl: 'https://example.com/path/to/image1.jpg',
    },
    {
      name: 'John Doe',
      college: 'ABC University',
      imageUrl: 'https://example.com/path/to/image2.jpg',
    },
    // Add more candidate objects as needed
  ];

  // Check if navigateTo state is set and perform navigation
  if (navigateTo) {
    window.location.href = navigateTo;
    return null; // Return null to prevent rendering of the component after navigation
  }

  return (
    <div className={styles.container}>
      {candidates.map((candidate, index) => (
        <CandidateCard
          key={index}
          name={candidate.name}
          college={candidate.college}
          imageUrl={candidate.imageUrl}
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

export default App;
