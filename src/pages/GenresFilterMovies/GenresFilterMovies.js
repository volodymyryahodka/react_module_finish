import React, {useCallback, useEffect} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getGenresFilterById} from "../../store/slices/genres.filter.slice";
import MoviesListCard from "../../components/MoviesListCard/MoviesListCard";
import "./GenresFilterMoviesStyle.css"


const GenresFilterFilms = () => {

	const {id} = useParams();
	const {results} = useSelector(store => store.genresFilter.genresFilter);

	const page = useSelector(store => store.genresFilter.page);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGenresFilterById({id, page}));
	}, [id]);

	const submitPrev = useCallback(() => {
		dispatch((getGenresFilterById({id, page: page - 1})))
	}, [page]);


	const submit = useCallback(() => {
		dispatch((getGenresFilterById({id, page: page + 1})))
	}, [page]);

	return (
		<div>
			<div className='GenresFilterMovies'>
				{
					results && results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
				}
			</div>

			<div className='GenresFilterMovies-outlet'><Outlet/></div>

			<div className='layout-btns'>
				<button onClick={submitPrev}>Previous Page</button>
				<button onClick={submit}>Next Page</button>
			</div>

		</div>
	);
};

export default GenresFilterFilms;