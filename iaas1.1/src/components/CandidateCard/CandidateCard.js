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
  const candidate = {
    name: 'Nishitesh Padhi',
    college: 'XIM University',
    imageUrl: 'https://example.com/path/to/image.jpg',
  };

  return (
    <div>
      <CandidateCard
        name={candidate.name}
        college={candidate.college}
        imageUrl={candidate.imageUrl}
      />
    </div>
  );
};

export default App;
