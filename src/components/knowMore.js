import React from 'react';

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
				<img src={FirstBlob} alt='' className='first-blob'/>
				<p className="about-segment-text">
					My full name is Syed Adil Hasan Naqvi <br/> and I usually go by <span className='blue-ify'>Adil</span>
				</p>
				<img src={FirstImg} alt="" height='150px' />
			</div>

			{/* COUNTRY */}
			<div className="about-segment">
				<img src={SecondBlob} alt='' className='second-blob'/>
				<img src={SecondImg} alt="" className="about-segment-image"/>
				<p className="about-segment-text" align='right'>
					I'm from <span className="blue-ify">Pakistan</span>, <br/> a South Asian country with a <br/> rich culture and an even richer history
				</p>
			</div>
				
				{/* THINGS I LIKE */}
			<div className="about-segment">
				<img src={ThirdBlob} alt='' className='third-blob'/>
				<p className="about-segment-text">
					I like playing chess, casual <br/> reading, graphics designing, <br/> and <span className='blue-ify'>coding</span>
				</p>
				<img src={ThirdImg} alt="" className="about-segment-image"/>
			</div>

			{/* INTERMEDIATE */}
			<div className="about-segment">
				<img src={FourthBlob} alt='' className='fourth-blob'/>
				<img src={FourthImg} alt="" className="about-segment-image"/>
				<p className="about-segment-text" align='right'>
					I did my Intermediate from <br/> <span className='blue-ify'>GCU</span> Lahore – one of the most <br/> prestigious colleges in Pakistan
				</p>
			</div>

			{/* MAJOR */}
			<div className="about-segment">
				<img src={FifthBlob} alt='' className='fifth-blob'/>
				<p className="about-segment-text">
					I majored in Mechanical Engineering <br/> from <span className='blue-ify'>NUST</span> – the #1 science and technology <br/> university in the country – with a minor in <br/> Computer Science
				</p>
				<img src={FifthImg} alt='' className="about-segment-image"/>	
			</div>

			{/* INTERESTS */}
			<div className="about-segment">
				<img src={SixthBlob} alt='' className='sixth-blob'/>
				<img src={SixthImg} alt='' className="about-segment-image"/>
				<p className='about-segment-text' align='right'>
					I am particularly interested in <br/> <span className='blue-ify'>machine learning</span>, <span className='blue-ify'>AI</span> and their <br/> integration in everyday human life
				</p>
			</div>
		</div>
	);
}

export default KnowMore;