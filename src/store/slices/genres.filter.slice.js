import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.service";


export const getGenresFilterById = createAsyncThunk(
	'genresFilterSlice/getGenresFilterById',

	async ({id, page}) => {
		const oneGenresF = await moviesService.getAllFG(id, page)
		return oneGenresF
	})

const initialState = {
	genresFilter: [],
	page: 1,
}

const genresFilterSlice = createSlice({
	name: 'genresFilterSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[getGenresFilterById.pending]: (state, action) => {

		},
		[getGenresFilterById.fulfilled]: (state, action) => {
			state.status = 'fulfilled'
			state.genresFilter = action.payload
			state.page = action.payload.page
		},
		[getGenresFilterById.rejected]: (state, action) => {

		}
	}
});

const genresFilterReduser = genresFilterSlice.reducer;
export default genresFilterReduser;