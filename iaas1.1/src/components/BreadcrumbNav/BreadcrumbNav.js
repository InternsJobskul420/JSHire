import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BreadcrumbNav.module.css';

const BreadcrumbNav = ({ routes }) => {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((pathname) => pathname !== '');
    const filteredPathnames = pathnames.filter((pathname) => pathname === 'hiringcompany');
    
    if (filteredPathnames.length > 0) {
      const path = `/${filteredPathnames.join('/')}`;
      const route = routes.find((route) => route.path === path);
      
      if (route && route.label === 'Hiring Companies') {
        return (
          <li key={path} className={styles.breadcrumb}>
            <Link to={path}>{route.label}</Link>
          </li>
        );
      }
    }
    
    return null;
  };
  
  
  
  

  return (
    <nav className={styles.nav}>
      <ul className={styles.breadcrumbs}>
        {generateBreadcrumbs()}
      </ul>
    </nav>
  );
};

export default BreadcrumbNav;
