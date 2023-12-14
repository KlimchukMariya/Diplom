import React from "react";
import {  NavLink } from "react-router-dom";
import Logo from '../../images/logo.svg';
import styles from "./footer.module.css"
import { MOVIES_ALL, TOP_PAGE } from "../../utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} lg:py-16 sm:py-10 xs:py-8 py-[30px] w-full`}>
      <div className={`${styles.footerContent} flex flex-col items-center ${styles.footerLinks}`}>
      
        <ul className={styles.footerLinks}>
  
            <li className={styles.footerItem}>
              {/* <NavLink to="/" className={styles.footerLink}>
                Home
              </NavLink> */}

          <NavLink to={`/${MOVIES_ALL}`} >
           <img src={Logo} alt='Лого' className={styles.logo} />
          </NavLink>

            </li>
            
            <li className={styles.footerItem}>
              <NavLink to={`/${MOVIES_ALL}`} className={styles.footerLink}>
                Movies
              </NavLink>
            </li>
            <li className={styles.footerItem}>
              <NavLink to={`/${TOP_PAGE}`} className={styles.footerLink}>
                TOP
              </NavLink>
            </li>
             <li className={styles.footerItem}>
              <NavLink to="/contacts"  className={styles.footerLink} >Контакты</NavLink> 
            </li>
          </ul>
 

          
       
      </div>
    </footer>
  );
};

export default Footer;