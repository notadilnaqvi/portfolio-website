import React from 'react';
import Header from '../components/header.js';
import Typing from '../components/typing.js';
import Title from '../components/title.js';
import Photo from '../media/photo.png';
import Know from '../components/know.js';

function Home(){
	return(
		<div>
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
			<Know/>
		</div>
	);
}

export default Home;