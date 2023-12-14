import {  NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { MOVIES_ALL, TOP_PAGE  } from "../../utils/constants";

export const Navigation = () => {
 return ( 
  <nav className={styles.navigation}>
   {/* <NavLink to="/"className={styles.navItem} >Home  </NavLink> */}
   <NavLink to={`/${MOVIES_ALL}`} className={styles.navItem} > Фильмы </NavLink>
   <NavLink to={`/${TOP_PAGE}`} className={styles.navItem} > Топ </NavLink>
  </nav>
   );
}

