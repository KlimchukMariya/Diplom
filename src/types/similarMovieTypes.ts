import { IMovie } from './movieTypes';


export interface ISimilarMovieState {
  similarMovies: {
    total: number;
    similarList: IMovie[];
  };
  isSimilarMoviesLoading: boolean;
  fetchSimilarMoviesError: null | string;
}

export interface ISimilarMoviesError {
  type: SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_ERROR;
  payload: string;
}

export enum SimilarMovieActionTypes {
  FETCH_SIMILAR_MOVIES_DATA = 'FETCH_SIMILAR_MOVIES_DATA',
  FETCH_SIMILAR_MOVIES_SUCCESS = 'FETCH_SIMILAR_MOVIES_SUCCESS',
  FETCH_SIMILAR_MOVIES_FINISHED = 'FETCH_SIMILAR_MOVIES_FINISHED',
  SET_SIMILAR_MOVIE_PAGE = 'SET_SIMILAR_MOVIE_PAGE',
  FETCH_SIMILAR_MOVIES_ERROR = 'FETCH_SIMILAR_MOVIES_ERROR', 
}

export interface IFetchSimilarMoviesDataAction {
  type: SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_DATA;
}

export interface IFetchSimilarMoviesSuccessAction {
  type: SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS;
  payload: {
    total: number;
    similarList: IMovie[];
  };
}

export interface IFetchSimilarMoviesFinishedAction {
  type: SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_FINISHED;
}

export interface ISetSimilarMoviePage {
  type: SimilarMovieActionTypes.SET_SIMILAR_MOVIE_PAGE;
  payload: number;
}

export type SimilarMovieAction =
  | IFetchSimilarMoviesDataAction
  | IFetchSimilarMoviesSuccessAction
  | IFetchSimilarMoviesFinishedAction
  | ISetSimilarMoviePage
  | ISimilarMoviesError;
