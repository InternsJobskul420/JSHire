import React from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { HCCard } from '../../../components/HCCard/HCCard';
import styles from './HiringCompany.module.css'; // Import the CSS module

export const HiringCompany = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles['display-cards']}>
        <HCCard />
        <HCCard />
        <HCCard />
        <HCCard />
        <HCCard />
        <HCCard />
        <HCCard />
        <HCCard />
      </div>
    </>
  );
};
  