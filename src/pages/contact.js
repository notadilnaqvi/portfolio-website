import React from 'react';
import Header from '../components/header.js';
import Title from '../components/title.js';
import Socials from '../components/socials.js';

function Contact(){
	return(
		<div>
			<Title pageTitle='Contact'/>
			<Header/>
			<hr/>
			<div className='contact-flex-wrapper'>
				<Socials/>
				<Socials/>
			</div>
		</div>
	);
}

export default Contact;