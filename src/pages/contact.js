import React from 'react';
import Header from '../components/header.js';
import Title from '../components/title.js';

function Contact(){
	return(
		<div>
			<Title pageTitle='Contact'/>
			<Header/>
			<hr/>
			<h1>This is the contacts page!</h1>
		</div>
	);
}

export default Contact;