import React from 'react';
import Title from '../components/title.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import KnowMore from '../components/knowMore.js';
import EnjoyedStuff from '../components/enjoyedStuff.js';


function About(){
	return(
		<>
			<Title pageTitle='About'/>
			<Header/>
			<hr/>
			<KnowMore/>
			<EnjoyedStuff/>
			<Footer/>
		</>
	);
}

export default About;