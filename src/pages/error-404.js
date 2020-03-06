import React from 'react';
import Header from '../components/header.js';


function PageNotFound(){
	return(
		<div>
			<Header/>
			<hr/>
			<div className='error-flex-wrapper'>
				<h1 className='error-sad-smiley'>: (</h1>
				<h1 className='error'>404</h1>
				<h1 className='error-subtext'>Page not found!</h1>
			</div>
		</div>
	);
}

export default PageNotFound;