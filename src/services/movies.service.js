import {axiosService} from "./axios.service";
import {urls} from "../constants/URL";


export const moviesService = {
	getMovies: (page) => axiosService.get(URL.movies(page)).then(value => value.data),
	getMovieById: (id) => axiosService.get(URL.onemovW(id)).then(value => value.data),
	getAllG: ()=> axiosService.get(URL.genres).then(value => value.data),
	getAllFG: (id, page)=> axiosService.get(URL.genresSlice(id, page)).then(value => value.data),
	getSerch: (item)=> axiosService.get(URL.searchFilms(item)).then(value => value.data)
}