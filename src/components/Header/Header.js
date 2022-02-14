import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import './HeaderStyle.css'
import {getAllMovies} from "../../store/slices/movie.slice";


const Header = () => {
	const dispatch = useDispatch();

	const submit = useCallback(() => {
		dispatch((getAllMovies(1)))
	}, [dispatch]);

	const toggle = (checked) => {
		document.body.setAttribute('light', '');
	};
	const untoggle = () => {
		document.body.removeAttribute('light');
	};

	return (
		<div className='header'>
			<h1 className='header-title'>All World Films</h1>
			<ul>
				<NavLink to={'/'} onClick={submit}>
					<li>Home</li>
				</NavLink>

				<NavLink to={'/genres'}>
					<li>All Genres</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Header;