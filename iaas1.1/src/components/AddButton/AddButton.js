import React from 'react'
import { FaPlus } from 'react-icons/fa';
import styles from './AddButton.module.css';
import { useNavigate } from 'react-router-dom';

export const AddButton = () => {
  const navigate = useNavigate()

  const addCompany=()=>{
    navigate('/hiringcompanyform')
  }

  return (
    <button className={styles.addButton} onClick={addCompany}>
      <FaPlus className={styles.addIcon} />
    </button>
  )
}
