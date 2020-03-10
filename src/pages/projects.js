import React from 'react';
import Title from '../components/title.js';
import {Footer} from '../components/footer.js';
import Header from '../components/header.js';

function Projects(){
	return(
		<>
			<Title pageTitle='Projects'/>
			<Header/>
			<hr/>
			<h1>This is the Projects page!</h1>
			<Footer/>
		</>
	);
}

export default Projects;