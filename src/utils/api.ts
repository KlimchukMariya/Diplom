import { Dispatch } from 'redux';
import {
  searchMovieAction,
  searchMovieErrorAction,
  searchMovieFinishedAction,
  searchMovieSuccessAction,
  setSearchKeywordAction,
  setSearchPagesCountAction,
} from '../store/actionCreators/searchMovieActionCreators';
import {
  fetchMovieDataAction,
  fetchMovieDataFinishedAction,
  fetchMovieErrorAction,
  fetchMovieSuccessAction,
} from '../store/actionCreators/singleMovieActionCreatora';
import {
  fetchTopMoviesDataAction,
  fetchTopMoviesErrorAction,
  fetchTopMoviesFinishedAction,
  fetchTopMoviesSuccessAction,
} from '../store/actionCreators/topMoviesActionCreators';
import { MovieActions } from '../types/movieTypes';
import { SearchMovieActions } from '../types/searchTypes';
import { TopMovieAction } from '../types/topMovieTypes'
import { BASE_FETCH_URL, BASE_TOP_MOVIES_URL,  BASE_TV_URL,  FETCH_ERROR_MESSAGE } from './constants';
import { fetchSimilarMoviesDataAction, fetchSimilarMoviesErrorAction, fetchSimilarMoviesFinishedAction, fetchSimilarMoviesSuccessAction } from '../store/actionCreators/similarMoviesActionCreators';
import { SimilarMovieAction } from '../types/similarMovieTypes';

const options = {
  headers: { 'X-API-KEY': 'fd79f533-d0d0-46c4-9f94-6e5501f3125a' },
};

const checkResponse = (response: Response) => {
  return response.ok ? response.json() : Promise.reject(`Ошибка с фронта`);
};

const fetchTopMovies = (page = 1) => {
  return async (dispatch: Dispatch<TopMovieAction>) => {
    try {
      dispatch(fetchTopMoviesDataAction());
      const response = await fetch(`${BASE_TOP_MOVIES_URL}${page}`, options);
      const topMoviesData = await checkResponse(response);
      dispatch(fetchTopMoviesSuccessAction(topMoviesData.films));
    } catch (err) {
      console.log(err);
      setTimeout(() => dispatch(fetchTopMoviesErrorAction(FETCH_ERROR_MESSAGE)), 400);
    } finally {
      setTimeout(() => dispatch(fetchTopMoviesFinishedAction()), 500);
    }
  };
};


const fetchTV = ( page = 1) => {
  return async (dispatch: Dispatch<TopMovieAction>) => {
    try {
      dispatch(fetchTopMoviesDataAction());
      const response = await fetch(`${BASE_TV_URL}${page}`, options);
      const topMoviesData  = await checkResponse(response);
       dispatch(fetchTopMoviesSuccessAction(topMoviesData.films));
    } catch (err) {
      console.log(err);
      setTimeout(() => dispatch(fetchTopMoviesErrorAction(FETCH_ERROR_MESSAGE)), 400);
    } finally {
      setTimeout(() => dispatch(fetchTopMoviesFinishedAction()), 500);
    }
  };
};

const fetchSimilar = (filmId: string) => {
  return async (dispatch: Dispatch<SimilarMovieAction>) => {
    try {
      dispatch(fetchSimilarMoviesDataAction());

      const response = await fetch(`${BASE_FETCH_URL}/v2.2/films/${filmId}/similars`, options);
      console.log('Ответ API:', response);

      const similarMoviesData = await checkResponse(response);
      console.log('Данные о похожих фильмах:', similarMoviesData);

      dispatch(fetchSimilarMoviesSuccessAction(similarMoviesData));
    } catch (err) {
      console.error('Ошибка при запросе похожих фильмов:', err);
      dispatch(fetchSimilarMoviesErrorAction(FETCH_ERROR_MESSAGE));
    } finally {
      dispatch(fetchSimilarMoviesFinishedAction());
    }
  };
};



const fetchMovie = (filmId: string) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    try {
      dispatch(fetchMovieDataAction());
      const response = await fetch(`${BASE_FETCH_URL}/v2.1/films/${filmId}`, options);
      const movieData = await checkResponse(response);
      dispatch(fetchMovieSuccessAction(movieData.data));
    } catch (err) {
      console.log(err);
      setTimeout(() => dispatch(fetchMovieErrorAction(FETCH_ERROR_MESSAGE)), 400);
    } finally {
      setTimeout(() => dispatch(fetchMovieDataFinishedAction()), 500);
    }
  };
};





const searchMovie = (keyword?: string, page = 1) => {
  return async (dispatch: Dispatch<SearchMovieActions>) => {
    try {
      dispatch(searchMovieAction());
      const response = await fetch(
        `${BASE_FETCH_URL}/v2.1/films/search-by-keyword?keyword=${keyword}&page=${page}`,
        options
      );
      const searchResultsData = await checkResponse(response);
      dispatch(searchMovieSuccessAction(searchResultsData.films));
      dispatch(setSearchPagesCountAction(searchResultsData.pagesCount));
      dispatch(setSearchKeywordAction(searchResultsData.keyword));
    } catch (err) {
      setTimeout(() => dispatch(searchMovieErrorAction(FETCH_ERROR_MESSAGE)), 400);
      console.log(err);
    } finally {
      setTimeout(() => dispatch(searchMovieFinishedAction()), 500);
    }
  };
};

export { fetchTopMovies, fetchMovie, searchMovie, fetchTV, fetchSimilar };
