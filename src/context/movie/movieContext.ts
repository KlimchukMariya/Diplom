import { createContext } from "react";
import  {IMovie} from "../../types/movieTypes"

export const MovieContext = createContext<{
	filteredMovie: IMovie[]
	error: unknown
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
}>({
	filteredMovie: [],
	error: null,
	setSearchValue: () => {}
})