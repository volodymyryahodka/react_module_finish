import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {getAllGenres} from "../../store/slices/genres.slice";
import GenresListCard from "../../components/GenresListCard/GenresListCard";
import './GenresListStyle.css';


const GenresList = () => {

	const {genres} = useSelector(store => store.genre);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllGenres(genres))
	}, []);

	return (
		<div className='GenresList'>
			<div className='GenresList-block'>{genres && genres.map(genr => <GenresListCard key={genr.id}
																							genr={genr}/>)}</div>

			<div className='GenresList-outlet'><Outlet/></div>
		</div>
	);
};

export default GenresList;