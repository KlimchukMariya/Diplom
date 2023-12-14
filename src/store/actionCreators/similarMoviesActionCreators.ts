
import { IMovie } from '../../types/movieTypes';
import {
  IFetchSimilarMoviesDataAction,
  IFetchSimilarMoviesFinishedAction,
  IFetchSimilarMoviesSuccessAction,


  ISimilarMoviesError,
  SimilarMovieActionTypes,
} from '../../types/similarMovieTypes';

export const fetchSimilarMoviesDataAction = (): IFetchSimilarMoviesDataAction => {
  return {
    type: SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_DATA,
  };
};

export const fetchSimilarMoviesSuccessAction = (similarMoviesData: { total: number; similarList: IMovie[] }): IFetchSimilarMoviesSuccessAction => {
  return {
    type: SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS,
    payload: similarMoviesData,
  };
};

export const fetchSimilarMoviesFinishedAction = (): IFetchSimilarMoviesFinishedAction => {
  return {
    type: SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_FINISHED,
  };
};


export const fetchSimilarMoviesErrorAction = (message: string): ISimilarMoviesError => {
  return {
    type: SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_ERROR,
    payload: message,
  };
};
