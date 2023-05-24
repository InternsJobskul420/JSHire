import React from 'react';
import styles from './CandidateCard.module.css';

const CandidateCard = ({ name, college, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Candidate" className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.college}>{college}</p>
      <button className={styles.button}>See Details</button>
    </div>
  );
};

const App = () => {
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

  return (
    <div className={styles.container}>
      {candidates.map((candidate, index) => (
        <CandidateCard
          key={index}
          name={candidate.name}
          college={candidate.college}
          imageUrl={candidate.imageUrl}
        />
      ))}
    </div>
  );
};

export default App;