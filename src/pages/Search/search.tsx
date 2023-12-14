import React from "react";
import { useTypedSelector } from "../../Components/Hooks/useTupesSelector";

import Pagination from "../../Components/Pagination/Pagination";
import { NO_SEARCH_RESULTS_MESSAGE, NO_SEARCH_YET_MESSAGE } from "../../utils/constants";
import MoviesList from "../../Components/MovieList.tsx/MovieList";
import Message from "../../Components/Message/Message";
// import GoBackLink from "../../Components/GoBackLink/GoBackLink";
import SearchForm from "../../Components/SearchForm.tsx/SearchForm";

 
const SearchResultsWrapper: React.FC = () => {
  const { isSearchResultsLoading, searchResults, searchMovieError, keyword } =
    useTypedSelector((state) => state.searchResults);

  return (
    <>
      {Boolean(searchResults.length) && (
        <>
        
         {/* <GoBackLink text={'Назад'} /> */}
         <SearchForm />
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