import React from 'react';
import BottomBlobs from '../media/blobs/bottom.png';


function Footer(){
	return(
		<footer className='footer'>
			<img src={BottomBlobs} alt='' className='bottom-blobs'/>
			<p className='footer-text'>
				Copyright Ⓒ 2020 Adil Naqvi. All Rights Reserved. Made with <span role="img" aria-label="heart">❤️</span> in React.
			</p>
		</footer>
	);
}

function StickyFooter(){
	return(
		<footer className='sticky-footer'>
			<img src={BottomBlobs} alt='' className='bottom-blobs'/>
			<p>
				Copyright Ⓒ 2020 Adil Naqvi. All Rights Reserved. Made with <span role="img" aria-label="heart">❤️</span> in React.
			</p>
		</footer>
	);
}

export {Footer, StickyFooter};