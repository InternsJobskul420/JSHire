import React from "react";
import styles from "./HCCard.module.css";
import { useNavigate } from "react-router-dom";

export const HCCard = (props) => {
  const navigate = useNavigate();

  const edit = () => {
    navigate("/updatehcaccount",{state: {"companyName":props.CompanyName}});

  };

  const addopening = () => {
    navigate("/jobopening");
  };

  return (
    <div className={styles.hc} >
      <div className={styles.crossBtnContainer}></div>

      <div className={styles.cardBody} onClick={addopening}>
        <div className={styles.textCenter}>
          <p className={styles.cardTitle}>{props.CompanyName}</p>

          <p className={styles.cardSubTitle}>
            Click on this card to add new job openings
          </p>
        </div>
      </div>
      <div className={styles.updateBtnContainer} onClick={edit}>
        <button type="button" className={styles.updateBtn}>
          Edit Account
        </button>
      </div>
    </div>
  );
};
