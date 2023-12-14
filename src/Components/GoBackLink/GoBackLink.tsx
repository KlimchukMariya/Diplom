import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

interface IGoBackLinkProps {
  text: string;
}

const GoBackLink: React.FC<IGoBackLinkProps> = ({ text }) => {
  const navigate = useNavigate();
  useEffect(() => {
  // Прокрутить страницу вверх при загрузке компонента
  window.scrollTo(0, 0);
}, []);
  return (
    <button className={styles.goBackButton} onClick={() => navigate(-1)}>
      {text}
    </button>
  );
};

export default GoBackLink;