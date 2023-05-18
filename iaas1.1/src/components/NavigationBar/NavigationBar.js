import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css'; // Import the CSS module

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
        <div className={styles.logo}></div>
        <div className={styles['menu-icon']} onClick={handleShowNavbar}></div>
        <div className={`${styles['nav-elements']} ${showNavbar && styles.active}`}>
          <ul>
            <li>
              <NavLink to="/" activeClassName={styles.active}>
                Welcome, Admin
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName={styles.active}>
                Change Password
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName={styles.active}>
                Logout 
              </NavLink>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon className={styles.test} icon={faBars}/>
      </div>
    </nav>
  );
};

export default NavigationBar;
