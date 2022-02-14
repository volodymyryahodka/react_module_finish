import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import './LayoutStyle.css'


const Layout = () => {

	return (
		<div>
			<Header/>
			<div className='Layout-Outlet'><Outlet/></div>
		</div>
	);
};

export default Layout;