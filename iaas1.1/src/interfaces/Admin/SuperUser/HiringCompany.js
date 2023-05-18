import React from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { HCCard } from '../../../components/HCCard/HCCard';
import './HiringCompany.module.css'; // Import the CSS module

export const HiringCompany = () => {
  return (
    <>
      <NavigationBar />
      <div className="display-cards">
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
