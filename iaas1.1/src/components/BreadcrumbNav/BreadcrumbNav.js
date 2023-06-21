import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BreadcrumbNav.module.css';

const BreadcrumbNav = (props) => {
  // const location = useLocation();
  // const [breadcrumb, setBreadcrumb] = useState(null);

  // useEffect(() => {
  //   const generateBreadcrumbs = () => {
  //     const pathnames = location.pathname.split('/').filter((pathname) => pathname !== '');
  //     const filteredPathnames = pathnames.filter((pathname) => pathname === 'hiringcompany');

  //     if (filteredPathnames.length > 0) {
  //       const path = `/${filteredPathnames.join('/')}`;
  //       const route = routes.find((route) => route.path === path);

  //       if (route && route.label === 'Hiring Companies') {
  //         setBreadcrumb(
  //           <li key={path} className={styles.breadcrumb}>
  //             <Link to={path}>{route.label}</Link><p>&nbsp;/&nbsp;</p>
  //           </li>
  //         );
  //       }
  //     } else {
  //       setBreadcrumb(null);
  //     }
  //   };

  //   generateBreadcrumbs();
  // }, [location.pathname, routes]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.breadcrumbs}>
        {props.page}
      </ul>
    </nav>
  );
};

export default BreadcrumbNav;
