import React from 'react';
import Title from '../components/title.js';
import Socials from '../components/socials.js';
import {StickyFooter} from '../components/footer.js';
import Header from '../components/header.js';


function Contact(){
	return(
		<>
			<Title pageTitle='Contact'/>
			<Header/>
			<hr/>
			<div className='contact-flex-wrapper'>
				<Socials/>
				<Socials/>
			</div>
			<StickyFooter/>
		</>
	);
}

export default Contact;