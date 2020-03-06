import React from 'react';
import Header from '../components/header.js';
import Typing from '../components/typing.js';
import Title from '../components/title.js';


function Home(){
	return(
		<div>
			<Title pageTitle='Home'/>
			<Header/>
			<hr/>
			<div className='home-text'>
				<p className='home-subtext'>
					Hi, I'm <p className='blue-ify'>Adil</p>!
				</p>
				<Typing/>
			</div>
		</div>
	);
}

export default Home;