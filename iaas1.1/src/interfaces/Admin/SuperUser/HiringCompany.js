import React from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { HCCard } from '../../../components/HCCard/HCCard';
import styles from './HiringCompany.module.css'; // Import the CSS module
import { AddButton } from '../../../components/AddButton/AddButton';

export const HiringCompany = () => {
  return (
    <>
      <NavigationBar />

      <h1 className={styles.formHeading}>Create An Account</h1>
      <div className={styles['display-cards']}>

        <HCCard CompanyName="Accenture"/>
        <HCCard CompanyName="TCS"/>
        <HCCard CompanyName="Wipro"/>
        <HCCard CompanyName="Cozentus"/>
        <HCCard />
        <HCCard />
        <HCCard />
        <HCCard />
        <AddButton side="SU"/>
      </div>
    </>
  );
};
