import React from 'react';
import Title from '../components/title.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';


function PageNotFound(){
	return(
		<>
			<Title pageTitle='Error'/>
			<Header/>
			<hr/>
			<div className='error-flex-wrapper'>
				<h1 className='error'>Error 404</h1>
				<h1 className='error-subtext'>Page not found!</h1>
				<h1 className='error-sad-smiley'>: (</h1>
			</div>
			<Footer/>
		</>
	);
}

export default PageNotFound;