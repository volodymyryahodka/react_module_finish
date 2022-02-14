import React from 'react';
import {NavLink} from "react-router-dom";
import {IMG_URL} from "../../constants/IMG_URL";
import './MoviesListCardStyle.css'

const MoviesListCard = ({movie}) => {

	const {id, poster_path, original_title, vote_average} = movie;

	return (
		<div className='MoviesListCardStyle'>
			<NavLink to={id.toString()} state={movie}>
				<div className='MoviesListCardStyle-img'><img src={IMG_URL + poster_path} alt="poster"/></div>

				<div className='MoviesListCardStyle-info'>

					<div className='MoviesListCardStyle-title'>{original_title}</div>

					<div>{vote_average}</div>
				</div>
			</NavLink>
		</div>
	);
};

export default MoviesListCard;