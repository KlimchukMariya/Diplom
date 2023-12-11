// import React, { useEffect, useState } from 'react';
// import {KinopoiskDev,
//   Filter,
//   MovieFields, } from '@openmoviedb/kinopoiskdev_client'
// import { Movie } from '../../shared/api/types'
// import styles from "./style.module.css"
// import { useFetch } from '../../shared/Hooks/useFetch';
// import { BASE_URL_MOVIE, axiosConfig } from '../../shared/api';

// const kp = new KinopoiskDev('XPV807T-PSN4GNJ-M8G99VC-YP4V1AT');


// const MovieList  = () => {

//   const [movies, setMovies] = useState<Movie[]>([]);

//   useEffect(() => {
// const getRelatedWithoutQueryBuilderMovies = async () => {
//   const query: Filter<MovieFields> = {
//     // Выбираем поля, которые мы хотим получить в ответе
//     selectFields: ['id', 'name', 'rating', 'poster', 'year', 'genres'],
//     // Добавляем фильтр поиска по указанному диапазону года
//     year: '1999-2023',
//     // Добавляем фильтр поиска по указанному диапазону рейтинга
//     'rating.kp': '0-10',
//     // Добавляем фильтр для поиска фильмов с постером
//     'poster.url': '!null',
//     // Добавляем сортировку по рейтингу
//     sortField: 'rating.kp',
//     sortType: '-1',
//     // Добавляем пагинацию и получаем 1 страницу по с 10 фильмами на странице
//     page: 1,
//     limit: 12,
//   };

//   // Отправляем запрос на получение фильмов
//   const { data, error, message } = await kp.movie.getByFilters(query);

//   if (data) {
//     const { docs, page, limit } = data;
//     setMovies(docs);
//     console.log(`Страница ${page} из ${limit}`);
//     console.log(docs);
//   }

//   // Если будет ошибка, то выведем ее в консоль
//   if (error) console.log(error, message);
// };
  
// getRelatedWithoutQueryBuilderMovies();
//   }, []);



// console.log(movies);





// import {  getMovies } from '../../shared/api';
 

// const MovieList: React.FC = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data, error, message } = await getMovies();

//         if (data) {
//           const { docs, page, limit } = data;
          
//           setMovies(data);
//           console.log(`Страница ${page} из ${limit}`);
//           console.log(docs);
//         }

//         if (error) {
//           console.log(error, message);
//         }
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     fetchData();
//   }, []); // Внимание: пустой массив зависимостей, чтобы useEffect выполнялся только при монтировании компонента

//   console.log('Movies:', movies);
//   console.log('Is Loading:', movies.length === 0);
// const MovieList : React.FC = () => {
// const { response } = useFetch(BASE_URL_MOVIE,axiosConfig)

// console.log(response);

//   return (
//     <>
//       <h1>Фильмы</h1>
      /* <div className={styles.container}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className={styles.movieBlock}>
              <img src={movie.poster.url} alt={`Poster for ${movie.name}`} className={styles.poster} />
              <div className={styles.movieDetails}>
                <p className={styles.movieTitle}>{movie.name}</p>
                <div className={styles.rating}>
                  <span>{movie.rating.kp}</span>
                  <p>{movie.genres.name}</p>
                </div>
                <p className={styles.yearAndGenre}>{movie.year}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> */
//     </>
//   );
// };

// export default MovieList;



import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../Hooks/useTupesSelector';
import { resetMovieStateAction } from '../../store/actionCreators/singleMovieActionCreatora';
import { fetchTopMovies } from '../../utils/api';
import { MAIN_PAGE, MOVIE_PAGE, MOVIES_ALL, SEARCH_PAGE } from '../../utils/constants';
import MovieCard from '../movieCard/MovieCard';
import SkeletonCard from '../Skeletons/SkeletonCard/SkeletonCard';
import styles from './styles.module.css';

const MoviesList: React.FC = () => {
  const location = useLocation();
  const { isTopMoviesLoading, topMovies, currentPage } = useTypedSelector(
    (state) => state.topMovies
  );
  const { isSearchResultsLoading, searchResults } = useTypedSelector(
    (state) => state.searchResults
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const actionFunction = fetchTopMovies(currentPage);
      await actionFunction(dispatch);
    };

    fetchData();
  }, [currentPage, dispatch]);

  return (
    <div className={styles.main}>
      <div className={`container ${styles['container--main']}`}>
        <ul className={styles.list}>
          {isSearchResultsLoading &&
            location.pathname === `/${SEARCH_PAGE}` &&
            searchResults.map((item) => <SkeletonCard key={item.filmId} />)
          }

          {!isSearchResultsLoading &&
            location.pathname === `/${SEARCH_PAGE}` &&
            searchResults.map((movie) => (
              <li key={movie.filmId} className={styles.listItem}>
                <Link
                  to={`/${MOVIE_PAGE}/${movie.filmId}`}
                  className={styles.link}
                  onClick={() => dispatch(resetMovieStateAction())}
                >
                  <MovieCard {...movie} />
                </Link>
              </li>
            ))
          }

          {isTopMoviesLoading &&
            (location.pathname === MAIN_PAGE || location.pathname === `/${MOVIES_ALL}`) &&
            topMovies.map((item) => <SkeletonCard key={item.filmId} />)
          }

          {!isTopMoviesLoading &&
            (location.pathname === MAIN_PAGE || location.pathname === `/${MOVIES_ALL}`) &&
            topMovies.map((movie) => (
              <li key={movie.filmId} className={styles.listItem}>
                <Link
                  to={`/${MOVIE_PAGE}/${movie.filmId}`}
                  className={styles.link}
                  onClick={() => dispatch(resetMovieStateAction())}
                >
                  <MovieCard {...movie} />
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default MoviesList;

