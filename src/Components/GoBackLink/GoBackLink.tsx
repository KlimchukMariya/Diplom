import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

interface IGoBackLinkProps {
  text: string;
}

const GoBackLink: React.FC<IGoBackLinkProps> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <button className={styles.goBackButton} onClick={() => navigate(-1)}>
      {text}
    </button>
  );
};

export default GoBackLink;