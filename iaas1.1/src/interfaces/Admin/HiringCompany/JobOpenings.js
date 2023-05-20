import React from 'react'
// import styles from './CardStyledTable.module.css';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { OpeningCard } from '../../../components/JobOpeningTable/OpeningCard';
import { AddButton } from '../../../components/AddButton/AddButton';


export const JobOpenings = () => {
  return (
    <>
    <NavigationBar/>
    <OpeningCard/>
    <AddButton/>
    </>
  )
}
