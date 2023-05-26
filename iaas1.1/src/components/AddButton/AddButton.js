import React from 'react'
import { FaPlus } from 'react-icons/fa';
import styles from './AddButton.module.css';
import { useNavigate } from 'react-router-dom';

export const AddButton = (props) => {
  const navigate = useNavigate()


  const add=()=>{

    if(props.side === "SU"){
      navigate('/hiringcompanyform');
    }
    
    else if (props.side === "HC"){
      navigate('/jobopeningform');
    }
  }

  return (
    <button className={styles.addButton} onClick={add}>
      <FaPlus className={styles.addIcon} />
    </button>
  )
}
