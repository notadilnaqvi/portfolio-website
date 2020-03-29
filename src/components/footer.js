import React from 'react';
import BottomBlobs from '../media/blobs/bottom.png';


function Footer(){
	return(
		<footer className='footer'>
			<img src={BottomBlobs} alt='' className='bottom-blobs'/>
			<div className='footer-text'>
				<div>Copyright Ⓒ 2020 Adil Naqvi.&nbsp;</div>
				<div>All Rights Reserved.&nbsp;</div>
				<div>Made with <span role="img" aria-label="heart">❤️</span> in React.</div>
			</div>
		</footer>
	);
}


export default Footer;

// function StickyFooter(){
// 	return(
// 		<footer className='sticky-footer'>
// 			<img src={BottomBlobs} alt='' className='bottom-blobs'/>
// 			<div className='footer-text'>
// 				<div>Copyright Ⓒ 2020 Adil Naqvi.&nbsp;</div>
// 				<div>All Rights Reserved.&nbsp;</div>
// 				<div>Made with <span role="img" aria-label="heart">❤️</span> in React.&nbsp;</div>
// 			</div>
// 		</footer>
// 	);
// }
