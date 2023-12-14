import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSimilar } from '../../utils/api';
import SkeletonCard from '../Skeletons/SkeletonCard/SkeletonCard';
import styles from './styles.module.css';
import { useTypedSelector } from '../Hooks/useTupesSelector';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Импорт иконок

interface IMovieProps {
  filmId: string;
}

const SimilarMovie: React.FC = () => {
  const { filmId } = useParams<IMovieProps>();
  const { isSimilarMoviesLoading, similarMovies } = useTypedSelector((state) => state.similarMovies);
  const dispatch = useDispatch();
 
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const actionFunction = fetchSimilar(filmId);
      await actionFunction(dispatch);
    };

    fetchData();
  }, [filmId, dispatch]);

  const cardsPerPage = 5;
  const totalCards = similarMovies.items ? similarMovies.items.length : 0;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startCard = (currentPage - 1) * cardsPerPage;
  const endCard = startCard + cardsPerPage;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={styles.slider}>
        <div className={`container ${styles['container--slider']}`}>
        <button className={styles.arrowButton} onClick={handlePrevPage} disabled={currentPage === 1}>
          <FaChevronLeft />
        </button>
        <ul className={styles.list}>
          {isSimilarMoviesLoading && <SkeletonCard />}
          {!isSimilarMoviesLoading &&
            similarMovies &&
            Array.isArray(similarMovies.items) &&
            similarMovies.items.slice(startCard, endCard).map((movie, index) => (
              <li key={index} className={styles.listItem}>
                <Link to={`/movie/${movie.filmId}`} className={styles.link}>
                  <div className={styles.card}>
                    <img src={movie.posterUrl} alt={movie.nameRu} className={styles.image} />
                    <p className={styles.title}>{movie.nameRu}</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        <button className={styles.arrowButton} onClick={handleNextPage} disabled={currentPage === totalPages}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SimilarMovie;

