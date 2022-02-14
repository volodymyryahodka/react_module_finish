import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneMovieById} from "../../store/slices/one.movies.slice";
import {IMG_URL} from "../../constants/IMG_URL";


const OneMoviDetailsGenres = () => {

	const {movieO} = useSelector(store => store.oneMovie);

	const {
		backdrop_path,
		genres,
		original_title,
		overview,
		production_companies,
		release_date,
		budget,
		vote_average,
		vote_count,
		homepage
	} = movieO;

	const {id} = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOneMovieById(id));
	}, []);

	return (
		<div className='movieDetails'>
			<h1 className='movieDetails-title'>{original_title}</h1>
			<div className='movieDetails-img'><img src={IMG_URL + backdrop_path} alt="poster"/></div>

			<div className='movieDetails-text'>{overview}</div>

			<div className='movieDetails-info'>
				<div><strong className='movieDetails-color-all-first'>Release_date:</strong> {release_date}</div>
				<div><strong className='movieDetails-color-all-first'>Budget:</strong> {budget}</div>
				<div><strong className='movieDetails-color-all-first'>Vote_average:</strong> {vote_average}</div>
				<div><strong className='movieDetails-color-all-first'>Vote_count:</strong> {vote_count}</div>
			</div>

			<div>
				<div className='movieDetails-color-all-first'>Production_companies:</div>
				<div className='movieDetails-Production_companies'>
					{production_companies && production_companies.map(value =>
						<div key={value.id} className='movieDetails-Production_companies-block'>
							{value.name}
							{<div><img className='movieDetails-Production_companies-img' src={IMG_URL + value.logo_path}
									   alt="poster"/></div>}
						</div>
					)}
				</div>
			</div>

			<div className='movieDetails-genres'>
				<div className='movieDetails-color-all-first'>Genres:</div>
				<div className='movieDetails-genres-block'>{
					genres && genres.map(value => <div key={value.id}
													   className='movieDetails-genres-block-one'>{value.name}</div>)
				}</div>
			</div>

			<div><strong className='movieDetails-color-all-first'>Homepage:</strong><a href={homepage}> {homepage}</a>
			</div>

		</div>
	);
};

export default OneMoviDetailsGenres;