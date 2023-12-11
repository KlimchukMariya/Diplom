 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchControl } from '../searchControl';
import Filters from '../Filter/Filter';
// import { useThemeContext } from '../../context/theme/useThemeContext';
import { useAuthContext } from '../../context/auth/useAuthContext';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';
import { Navigation } from '../Navigation';


const  SearchIcon = () => (
<svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM9 12C9 11.4477 9.44772 11 10 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H10C9.44772 13 9 12.5523 9 12ZM13 18C13 17.4477 13.4477 17 14 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H14C13.4477 19 13 18.5523 13 18Z"
    />
  </svg>
);

const Header: React.FC = () => {
  // const { changeTheme } = useThemeContext();
  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  const handleLogout = () => {
    logOut(() => {
      navigate('/');
    });
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles['container--header']}`}>
        <Link to="/">
          <p className={styles.logo}> Pixema </p>
        </Link>
        <div className={`searchControl ${styles['searchControl--header']}`}>
          {/* <SearchControl />
          <button className={styles.filterButton} onClick={toggleFilters} >
            <SearchIcon /> 
          </button> */}
        </div>
        {/* <button className={styles.filterButton} onClick={toggleFilters}>
         <SearchIcon /> 
        
        </button> */}
<Navigation />
      

<ThemeToggle/>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
        {showFilters && <Filters onClose={() => setShowFilters(false)} toggleFilters={toggleFilters} />}
      </div>
    </header>
  );
};

export default Header;
