import React from "react";
import { useTypedSelector } from "../../Components/Hooks/useTupesSelector";
import MovieList from "../../Components/MovieList.tsx/MovieList";
import Pagination from "../../Components/Pagination/Pagination";
import { NO_SEARCH_RESULTS_MESSAGE, NO_SEARCH_YET_MESSAGE, SEARCH_PAGE } from "../../utils/constants";
import MoviesList from "../../Components/MovieList.tsx/MovieList";
import Message from "../../Components/Message/Message";

// SearchResultsWrapper.tsx (новый компонент для обертки результатов поиска)
const SearchResultsWrapper: React.FC = () => {
  const { isSearchResultsLoading, searchResults, searchMovieError, keyword } =
    useTypedSelector((state) => state.searchResults);

  return (
    <>
      {Boolean(searchResults.length) && (
        <>
          <MoviesList />
          <Pagination />
        </>
      )}

      {!isSearchResultsLoading && searchMovieError && (
        <Message message={searchMovieError} />
      )}

      {!isSearchResultsLoading && !searchMovieError && keyword === '' && (
        <Message message={NO_SEARCH_YET_MESSAGE} />
      )}
      {!isSearchResultsLoading && !!keyword && Boolean(!searchResults.length) && (
        <Message message={NO_SEARCH_RESULTS_MESSAGE} />
      )}
    </>
  );
};
export default SearchResultsWrapper;