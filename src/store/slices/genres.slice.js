import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.service";


export const getAllGenres = createAsyncThunk(
	'genresSlice/getAllGenres',

	async () => {
		const genres = await moviesService.getAllG();
		return genres
	})

const initialState = {
	genres: [],
}

const genresSlice = createSlice({
	name: 'genresSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllGenres.pending]: (state, action) => {
		},
		[getAllGenres.fulfilled]: (state, action) => {
			state.status = 'fulfilled'
			state.genres = action.payload.genres
		},
		[getAllGenres.rejected]: (state, action) => {
		}
	}
});

const genresReducer = genresSlice.reducer;
export default genresReducer;