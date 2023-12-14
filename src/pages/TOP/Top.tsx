
import SearchForm from "../../Components/SearchForm.tsx/SearchForm";
import Pagination from "../../Components/Pagination/Pagination";
import TopList from "../../Components/MovieList.tsx/TopList";
 
 

const Top: React.FC = () => {

  return (
   
    <div className="container">
        <SearchForm />
          <TopList/>
        <Pagination />
    </div>
  );
};

 
export default Top;