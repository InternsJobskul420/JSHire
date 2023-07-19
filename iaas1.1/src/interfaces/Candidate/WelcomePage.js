import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateShowMessage from "../../components/CandidateShowMessage/CandidateShowMessage";
import styles from "./Candidate.module.css";
import CandidateLayout from "../../components/CandidateLayout/CandidateLayout";

const WelcomePage = () => {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  const url = new URL(currentUrl);
const candidateId = url.pathname.split("/")[3];
let company = url.pathname.split("/")[2];
// console.log(candidateId);
// console.log(company);

if(company.includes('%')){
  company = company.replace(/%/g, ' ')
  company = company.replace(/20/g, '');
}
// console.log(company);

  const heading = "You've got this!";
  const description =
    "Believe in yourself and your abilities. Remember to present your qualifications, skills, and experiences with clarity and confidence. All the best.";
  const terms =
    "I Accept all Terms and Conditions and Privacy Policy of JobskulHire";

  const [selected, setSelected] = useState(false);

  let navigate = useNavigate();

  const handleRadioClick = () => {
    setSelected(!selected);
  };

  const handleNextButtonClick = () => {
    if (selected) {
      navigate("../EquipmentTesting",{state:{id: candidateId, company:company} });
    }
  };


 

  return (
   <CandidateLayout>
        <CandidateShowMessage header={heading} description={description} />

        <p className={styles.candidate_agreement}>
          <input
            type="checkbox"
            checked={selected}
            onChange={handleRadioClick}
            placeholder="check"
          />
          {terms}
        </p>
        <button
          className={`${styles.nextBtn} ${selected ? styles.candiButton : ""}`}
          type="submit"
          onClick={handleNextButtonClick}
          disabled={!selected}
        >
          Next
        </button>
      
    </CandidateLayout>
  );
};

export default WelcomePage;
