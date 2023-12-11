import { memo } from "react";
import { BiError } from "react-icons/bi";
import styles from "./style.module.css"

interface ErrorProps {
  className?: string | undefined;
  error: string;
}

const Error = memo(({ className = "h-screen", error }: ErrorProps)=> {
  return (
    <div className={`${styles.errorContainer} ${className} flex justify-center items-center`}>
      <div className={styles.errorContent}>
        <BiError className={styles.errorIcon} />
        <p className={styles.errorMessage}>{error}</p>
      </div>
    </div>
  );
});

export default Error;