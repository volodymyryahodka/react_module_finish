import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./slices/movie.slice";
import oneMovieReducer from "./slices/one.movies.slice";
import genresReducer from "./slices/genres.slice";
import genresFilterReduser from "./slices/genres.filter.slice";


const store = configureStore({
	reducer: {
		movie: movieReducer,
		oneMovie: oneMovieReducer,
		genre: genresReducer,
		genresFilter: genresFilterReduser,
	}
});

export default store;