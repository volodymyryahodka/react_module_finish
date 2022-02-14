import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.service";


export const getAllMovies = createAsyncThunk(
	'movieSlice/getAllMovies',

	async (page) => {
		const movies = await moviesService.getMovies(page);
		return movies
	})

const initialState = {
	movies: [],
	status: null,
	page: 1,
}

const movieSlice = createSlice({
	name: 'movieSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllMovies.pending]: (state, action) => {

		},
		[getAllMovies.fulfilled]: (state, action) => {
			state.status = 'fulfilled'
			state.movies = action.payload
			state.page = action.payload.page
		},

		[getAllMovies.rejected]: (state, action) => {

		}
	}
});

const movieReducer = movieSlice.reducer;
export default movieReducer;