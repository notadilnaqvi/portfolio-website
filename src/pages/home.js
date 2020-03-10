import React from 'react';
import Typing from '../components/typing.js';
import Title from '../components/title.js';
import Photo from '../media/photo.png';
import ArrowThing from '../components/arrowThing.js';
import {Footer} from '../components/footer.js';
import Header from '../components/header.js';


function Home(){
	return(
		<>
			<Title pageTitle='Home'/>
			<Header/>
			<hr/>
			<div className='home-flex-wrapper'>
				<img className='photo' src={Photo} alt="" />
				<div className='home-text'>
					<p className='home-subtext'>
						Hi, I'm <p className='blue-ify'>Adil</p>!
					</p>
					<Typing/>
				</div>
			</div>
			<ArrowThing/>
			<Footer className='sticky-footer-hack'/>
		</>
	);
}

export default Home;