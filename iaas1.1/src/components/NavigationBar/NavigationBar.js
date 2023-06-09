import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css'; // Import the CSS module
import  jobskulLogo from '../../assets/jobskulLogo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
 
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={jobskulLogo} alt="Jobskul Logo" />
        </div>
        <div className={styles['menu-icon']} onClick={handleShowNavbar}></div>
        <div className={`${styles['nav-elements']} ${showNavbar && styles.active}`}>
          <ul>
            <li>
              <NavLink to="/"  activeclassname={styles.active}>
                Welcome, Admin
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog"  activeclassname={styles.active}>
                Change Password
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects"  activeclassname={styles.active}>
                Logout 
              </NavLink>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon className={styles.test} icon={faBars} />
      </div>
    </nav>
  );
};

export default NavigationBar;
