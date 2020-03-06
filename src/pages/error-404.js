import React from 'react';
import Header from '../components/header.js';
import Title from '../components/title.js';

function PageNotFound(){
	return(
		<div>
			<Title pageTitle='Oops!'/>
			<Header/>
			<hr/>
			<div className='error-flex-wrapper'>
				<h1 className='error-sad-smiley'>: (</h1>
				<h1 className='error'>404</h1>
				<h1 className='error-subtext'>page not found</h1>
			</div>
		</div>
	);
}

export default PageNotFound;