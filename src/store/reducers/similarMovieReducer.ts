import { ISimilarMovieState, SimilarMovieAction, SimilarMovieActionTypes } from "../../types/similarMovieTypes";

const initialState: ISimilarMovieState = {
  similarMovies: {
    total: 0,
    similarList: [],
  },
  isSimilarMoviesLoading: false,

  fetchSimilarMoviesError: null,
};

export const similarMovieReducer = (state = initialState, action: SimilarMovieAction): ISimilarMovieState => {
  switch (action.type) {
    case SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_DATA: {
      return { ...state, isSimilarMoviesLoading: true };
    }
case SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS: {
  return {
    ...state,
    similarMovies: action.payload,
  };
}
    case SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_FINISHED: {
      return { ...state, isSimilarMoviesLoading: false };
    }
    case SimilarMovieActionTypes.FETCH_SIMILAR_MOVIES_ERROR: {
      return { ...state, fetchSimilarMoviesError: action.payload };
    }
    default:
      return state;
  }
};
