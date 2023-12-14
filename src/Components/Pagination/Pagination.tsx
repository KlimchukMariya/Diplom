import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import  {useTypedSelector}  from '../Hooks/useTupesSelector';
import { setSearchPageAction } from '../../store/actionCreators/searchMovieActionCreators';
import { setTopMoviePageAction } from '../../store/actionCreators/topMoviesActionCreators';
import { searchMovie } from '../../utils/api';
import {  MOVIES_ALL, SEARCH_PAGE, TOP_PAGE } from '../../utils/constants';
import  {handlePagesCounts}  from '../../utils/handlePagesCounts';
import SkeletonPagination from '../Skeletons/SkeletonPagination/SkeletonPagination';
import styles from './styles.module.css';
import { useEffect } from 'react';
import ScrollToTopOnRouteChange from '../scrollToTop/ScrollToTop';

const Pagination: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pagesCount, currentPage, isTopMoviesLoading } = useTypedSelector(
    (state) => state.topMovies
  );
  const { searchResultsPagesCount, searchResultsCurrentPage, keyword, isSearchResultsLoading } =
    useTypedSelector((state) => state.searchResults);

  const searchMoviePaginationPages: number[] = [];
  const topMovieePaginationPages: number[] = [];

  handlePagesCounts(topMovieePaginationPages, pagesCount, currentPage);
  handlePagesCounts(searchMoviePaginationPages, searchResultsPagesCount, searchResultsCurrentPage);

  const onTopMoviesPaginationClick = (p: number): void => {
    dispatch(setTopMoviePageAction(p));
  };

  const onSearchPaginationClick = (p: number): void => {
    dispatch(setSearchPageAction(p));
    dispatch(searchMovie(keyword, p));
  };
 

  return (
    <>
    <ScrollToTopOnRouteChange />
    <div className={styles.pagination}>
      <ul className={styles.list}>
        {isTopMoviesLoading &&
           ( location.pathname === `/${MOVIES_ALL}` || location.pathname === `/${TOP_PAGE}`)  &&
          topMovieePaginationPages.map((item) => <SkeletonPagination key={item} />)}

        {!isTopMoviesLoading &&
           (location.pathname === `/${MOVIES_ALL}` || location.pathname === `/${TOP_PAGE}`) &&
          topMovieePaginationPages.map((page) => (
            <li key={page} className={styles.listItem}>
              <Link
                to='#'
                className={`${styles.link} ${currentPage === page ? styles.activeLink : ''}`}
                onClick={() => onTopMoviesPaginationClick(page)}
              >
                {page}
              </Link>
            </li>
          ))}

        {isSearchResultsLoading &&
          location.pathname === `/${SEARCH_PAGE}` &&
          searchMoviePaginationPages.map((item) => <SkeletonPagination key={item} />)}

        {!isSearchResultsLoading &&
          location.pathname === `/${SEARCH_PAGE}` &&
          searchMoviePaginationPages.map((page) => (
            <li key={page} className={styles.listItem}>
              <Link
                to='#'
                className={`${styles.link} ${
                  searchResultsCurrentPage === page ? styles.activeLink : ''
                }`}
                onClick={() => onSearchPaginationClick(page)}
              >
                {page}
              </Link>
            </li>
          ))}
      </ul>
    </div>
    </>
  );
};

export default Pagination;