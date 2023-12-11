import React from "react";
import { Link } from "react-router-dom";



import styles from "./footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} lg:py-16 sm:py-10 xs:py-8 py-[30px] w-full`}>
      <div className={`${styles.footerContent} flex flex-col items-center ${styles.footerLinks}`}>
      
        <ul className={styles.footerLinks}>
          
            return (
              <li  className={styles.footerLinksItem}>
                <Link
                  to="/"
                  className={`${styles.footerLink} hover:text-primary hover:underline transition-all duration-300`}
                >
                 
                </Link>
              </li>
            );
          
        </ul>
      </div>
    </footer>
  );
};

export default Footer;