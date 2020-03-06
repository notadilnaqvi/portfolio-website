import React from 'react';
import Header from '../components/header.js';
import Title from '../components/title.js';

function About(){
	return(
		<div>
			<Title pageTitle='About'/>
			<Header/>
			<hr/>
			<h1>This is the about page!</h1>
		</div>
	);
}

export default About;