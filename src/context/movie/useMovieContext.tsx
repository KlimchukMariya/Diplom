import { useContext } from "react"
import { MovieContext } from "./movieContext"

export const useMovieContext = () => {
 return useContext(MovieContext)
}