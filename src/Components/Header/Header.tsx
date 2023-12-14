 
import React  from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg';

import styles from './Header.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Navigation } from '../Navigation';
import { MOVIES_ALL } from '../../utils/constants';

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={`container ${styles['container--header']}`}>
          <NavLink to={`/${MOVIES_ALL}`} >
           <img src={Logo} alt='Лого' className={styles.logo} />
          </NavLink>
          <div className={styles.nav}>
            <Navigation />
            <ThemeToggle/> 
         </div> 
      </div>
    </header>
  );
};

export default Header;
