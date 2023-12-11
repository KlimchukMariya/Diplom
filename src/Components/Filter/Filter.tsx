

import React from 'react';
import styles from "./Filter.module.css"

interface FiltersProps {
  onClose: () => void;
  toggleFilters: () => void;
}


const Filters: React.FC<FiltersProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.filtersContainer}>
        <div className={styles.header}>
          <h2>Filters</h2>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
        </div>

          <div className={styles.filtersSection}>
          <h3>Sort By</h3>
          <button className={styles.filterButton}>Rating</button>
          <button className={styles.filterButton}>Year</button>
        </div>

        <div className={styles.line}></div>

        <div className={styles.filtersSection}>
          <h3>Full or Short Movie Name</h3>
          <input type="text" className={styles.input} placeholder="Enter name..." />
        </div>

        <div className={styles.filtersSection}>
          <h3>Country</h3>
          <input type="text" className={styles.input} placeholder="Your text" />
        </div>

        <div className={styles.filtersSection}>
          <h3>Sorting by Countries</h3>
          <button className={styles.countryButton}>Select Country</button>
          {/* Меню стран можно добавить здесь */}
        </div>

        <div className={styles.filtersSection}>
          <h3>Rating</h3>
          <div className={styles.ratingContainer}>
            <input type="text" className={styles.input} placeholder="From" />
            <div className={styles.space}></div>
            <input type="text" className={styles.input} placeholder="To" />
          </div>
        </div>

        <div className={styles.filtersSection}>
          <h3>Genre</h3>
          {/* Выбор жанра можно добавить здесь */}
        </div>

        <div className={styles.filtersSection}>
          <button className={styles.clearButton}>Clear Filter</button>
          <button className={styles.showResultsButton}>Show Results</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
