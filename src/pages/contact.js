import React from 'react';
import Title from '../components/title.js';
import Socials from '../components/socials.js';
import Form from '../components/form.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';


function Contact(){
	return(
		<>
			<Title pageTitle='Contact'/>
			<Header/>
			<hr/>
			<div className='contact-flex-wrapper'>
				<Form/>
				<Socials/>
			</div>
			<Footer/>
		</>
	);
}

export default Contact;