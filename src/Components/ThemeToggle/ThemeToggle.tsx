

import { useThemeContext } from '../../context/theme/useThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons'; 
import styles from './styles.module.css';

const ThemeToggle = () => {
  const { theme, changeTheme } = useThemeContext();

  return (
    <button className={styles['btn-theme']} onClick={changeTheme}>
      {theme === 'light' ? (
        <FontAwesomeIcon icon={farMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </button>
  );
};

export default ThemeToggle;


