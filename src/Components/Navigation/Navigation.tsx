import {  NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { MOVIES_ALL  } from "../../utils/constants";

export const Navigation = () => {
 return ( 
  <nav className={styles.navigation}>
   <NavLink to="/"className={styles.navItem} >Home  </NavLink>
   <NavLink to={`/${MOVIES_ALL}`} className={styles.navItem} >Movies</NavLink>
   <NavLink to="/tv" className={styles.navItem} >TvSeries </NavLink>
  </nav>
   );
}

