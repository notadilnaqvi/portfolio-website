import React from 'react';
import Typing from '../components/typing.js';
import Title from '../components/title.js';
import Photo from '../media/photo.png';
import ArrowThing from '../components/arrowThing.js';
import {Footer} from '../components/footer.js';
import Header from '../components/header.js';
import {Link} from 'react-router-dom';
import FirstBlob from '../media/blobs/first.png';
import SecondBlob from '../media/blobs/second.png';
import ThirdBlob from '../media/blobs/third.png';
import FourthBlob from '../media/blobs/fourth.png';


function Home(){
	return(
		<>

			<Title pageTitle='Home'/>
			<Header/>
			<hr/>
			<div className='home-flex-wrapper'>
				<div className='home-top-section'>
					<img className='photo' src={Photo} alt="" />
					<div className='home-text'>
						<p className='home-subtext'>
							Hi, I'm <span className='blue-ify'>Adil</span>!
						</p>
						<Typing/>
					</div>
				</div>
			</div>
			<ArrowThing/>
			<div className='home-bottom-section'>
				<div className='segment'>
					<img src={FirstBlob} alt="" className='first-blob'/>
					<p>I'm a <span className='blue-ify'>mechanical engineering graduate</span> from <br/> the #1 science and tech university in Pakistan <br/>
					<Link to='/about' className='link'>know more</Link>
					</p>
				</div>
				<div className='segment'>
					<img src={SecondBlob} alt="" className='second-blob'/>
					<p align='right'>
						I'm very passionate when it comes to anything <br/> programming related. I have <span className='blue-ify'>3 specializations</span> and a <br/> minor in computer science <br/>
						<a href="https://www.google.com" targer='_black' className='link'>view specializations</a>
					</p>
					
				</div>
				<div className='segment'>
					<img src={ThirdBlob} alt="" className='third-blob'/>
					<p>Along with some web development experience, I <br/> have completed several <span className='blue-ify'>machine learning</span> and AI <br/> projects. This website is one of my latest ones <br/>
					<Link to='/projects' className='link'>view projects</Link>
					</p>
					
				</div>
				<div className='segment'>
					<img src={FourthBlob} alt="" className='fourth-blob'/>
					<p align='right'>
						I am currently <span className='blue-ify'>looking for opportunities</span> that <br/> allow me to pursue my love for coding and help <br/> me expand my skill set <br/>
						<Link to='/contact' className='link' >contact me</Link>
					</p>
				</div>
			</div>
			<Footer/>
		</>
	);
}

export default Home;