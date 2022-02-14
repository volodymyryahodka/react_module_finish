import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store/slices/movie.slice";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesListStyle.css';


const MoviesList = () => {
	const {results} = useSelector(store => store.movie.movies);

	const page = useSelector(store => store.movie.page);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllMovies(page));
	}, []);

	const submitPrev = useCallback(() => {
		dispatch((getAllMovies(page - 1)))
	}, [page]);


	const submit = useCallback(() => {
		dispatch((getAllMovies(page + 1)))
	}, [page]);


	return (
		<div>
			<div className='MoviesList'>
				{
					results && results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
				}
			</div>

			<div className='layout-btns'>
				<button onClick={submitPrev}>Previous Page</button>
				<button onClick={submit}>Next Page</button>
			</div>

		</div>

	);
};

export default MoviesList;