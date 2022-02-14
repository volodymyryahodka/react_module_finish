import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.service"

export const getOneMovieById = createAsyncThunk(
	'movieOneSlice/getOneMovieById',

	async (id) => {
		const oneMovie = await moviesService.getMovieById(id);
		return oneMovie
	})

const initialState = {
	movieO: {},
}

const movieOneSlice = createSlice({
	name: 'movieOneSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[getOneMovieById.pending]: (state, action) => {

		},
		[getOneMovieById.fulfilled]: (state, action) => {
			state.status = 'fulfilled'
			state.movieO = action.payload
		},
		[getOneMovieById.rejected]: (state, action) => {

		}
	}

});
const oneMovieReducer = movieOneSlice.reducer;
export default oneMovieReducer;