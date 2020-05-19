import React from 'react';
import Pronunciation from './pronunciation.js'

// BLOBS
import FirstBlob from '../media/blobs/first.png';
import SecondBlob from '../media/blobs/second.png';
import ThirdBlob from '../media/blobs/third.png';
import FourthBlob from '../media/blobs/fourth.png';
import FifthBlob from '../media/blobs/fifth.png';
import SixthBlob from '../media/blobs/sixth.png';

// IMAGES
import FirstImg from '../media/photo-2.png';
import SecondImg from '../media/second.png';
import ThirdImg from '../media/third.png';
import FourthImg from '../media/fourth.png';
import FifthImg from '../media/fifth.png';
import SixthImg from '../media/sixth.png';


function KnowMore(){
	return(
		<div className="know-more-flex-wrapper">

			{/* HEADING */}
			<h1 className="about-heading">Some tid bits</h1>

			{/* ME */}
			<div className="about-segment">
				<div className="about-segment-text">
					<img src={FirstBlob} alt='' className='first-blob'/>
					My full name is Syed Adil Hasan Naqvi and I usually go by <Pronunciation/>
				</div>
				<img src={FirstImg} alt="" height='150px' />
			</div>

			{/* COUNTRY */}
			<div className="about-segment">
				<img src={SecondImg} alt="" className="about-segment-image"/>
				<p className="about-segment-text" align='right'>
					<img src={SecondBlob} alt='' className='second-blob'/>
					I'm from <a href="https://en.wikipedia.org/wiki/Pakistan" target='_blank' rel="noopener noreferrer"className="know-more-link">Pakistan</a>, a South Asian country with a rich culture and an even richer history
				</p>
			</div>
				
				{/* THINGS I LIKE */}
			<div className="about-segment">
				<p className="about-segment-text">
					<img src={ThirdBlob} alt='' className='third-blob'/>
					I like playing chess, casual reading, graphics designing, and <a href="https://github.com/notadilnaqvi" target='_blank' rel="noopener noreferrer"className="know-more-link">coding</a>
				</p>
				<img src={ThirdImg} alt="" className="about-segment-image"/>
			</div>

			{/* INTERMEDIATE */}
			<div className="about-segment">
				<img src={FourthImg} alt="" className="about-segment-image"/>
				<p className="about-segment-text" align='right'>
					<img src={FourthBlob} alt='' className='fourth-blob'/>
					I did my Intermediate from <a href="https://en.wikipedia.org/wiki/Government_College_University,_Lahore#History" target='_blank' rel="noopener noreferrer"className="know-more-link">GCU</a> Lahore – one of the most prestigious colleges in Pakistan
				</p>
			</div>

			{/* MAJOR */}
			<div className="about-segment">
				<p className="about-segment-text">
					<img src={FifthBlob} alt='' className='fifth-blob'/>
					I majored in Mechanical Engineering from <a href="https://en.wikipedia.org/wiki/National_University_of_Sciences_%26_Technology#Rankings_and_awards" target='_blank' rel="noopener noreferrer"className="know-more-link">NUST</a> – the #1 science and technology university in the country – with a minor in Computer Science
				</p>
				<img src={FifthImg} alt='' className="about-segment-image"/>	
			</div>

			{/* INTERESTS */}
			<div className="about-segment">
				<img src={SixthImg} alt='' className="about-segment-image"/>
				<p className='about-segment-text' align='right'>
					<img src={SixthBlob} alt='' className='sixth-blob'/>
					I am particularly interested in machine learning and artificial intelligence
				</p>
			</div>
		</div>
	);
}

export default KnowMore;