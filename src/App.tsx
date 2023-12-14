
 import { Routes, Route } from 'react-router-dom'
 import { NotFound } from './pages/NotFound/NotFound'
// import Home from './pages/Home/Home'
import MainLayout from './pages/mainLayout/MainLayout'
import MoviePage from './Components/MoviePage/MoviePage'
import { MOVIES_ALL, MOVIE_PAGE, SEARCH_PAGE, TOP_PAGE} from './utils/constants'
import Movie from './pages/Movie/Movie'
import SearchResultsWrapper from './pages/Search/search'
import TV from './pages/TOP/Top'
import ScrollToTop from './Components/scrollToTop/ScrollToTop'
 
 

 const App = () => {
	return (

    <>
  
 <Routes>
  
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path={`/${MOVIES_ALL}`} element={<Movie />} />
        <Route
          path={`/${MOVIE_PAGE}/:filmId`}
          element={<MoviePage />}
        />
        <Route
          path={`/${SEARCH_PAGE}`}
          element={
            <SearchResultsWrapper />
          }
        />
        <Route path={`/${TOP_PAGE}`} element={<TV/>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    
 </>
	)
}
 
 export default App
