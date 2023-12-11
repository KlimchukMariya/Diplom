import { ReactNode, useState } from "react";
import { MovieContext } from "./movieContext";
import { useFetch } from "../../shared";
import { Movie } from "../../shared/api/types";
import { BASE_URL_ALL } from "../../shared/api";

export const MovieContext = ({ children }: { children: ReactNode }) => {
 const [searchValue, setSearchValue] = useState('')
 
	const { response, error } = useFetch<Movie>(BASE_URL_ALL)
	
 
const filteredCountry = response.filter((movie) =>
	movie.name.common.toLowerCase().includes(searchValue.toLowerCase())
)

 return (
		<MovieContext.Provider value={{ filteredCountry, error, setSearchValue }}>
			{children}
		</MovieContext.Provider>
	)
}