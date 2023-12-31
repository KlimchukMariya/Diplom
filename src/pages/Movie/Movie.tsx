
import MoviesList from "../../Components/MovieList.tsx/MovieList";
import Pagination from "../../Components/Pagination/Pagination";
import SearchForm from "../../Components/SearchForm.tsx/SearchForm";


const Movie = () => {

  return (
    
    <div className="container">
      
      <SearchForm />
     
      <MoviesList />
      <Pagination />
    </div>
  );
};

export default Movie;