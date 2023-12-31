import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { searchMovieReducer } from './searchMovieReducer';
import { topMovieReducer } from './topMovieReducer';
import { similarMovieReducer } from './similarMovieReducer';

export const rootReducer = combineReducers({
  topMovies: topMovieReducer,
  singleMovie: movieReducer,
  searchResults: searchMovieReducer,
  similarMovies: similarMovieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;