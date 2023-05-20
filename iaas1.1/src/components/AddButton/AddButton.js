import React from 'react'
import { FaPlus } from 'react-icons/fa';
import styles from './AddButton.module.css';

export const AddButton = () => {
  return (
    <button className={styles.addButton}>
      <FaPlus className={styles.addIcon} />
    </button>
  )
}
