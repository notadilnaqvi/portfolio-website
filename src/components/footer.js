import React from 'react';


function Footer(){
	return(
		<footer className='footer'>
			<p className='footer-text'>Copyright Ⓒ 2020 Adil Naqvi. All Rights Reserved.</p>
		</footer>
	);
}

function StickyFooter(){
	return(
		<footer className='sticky-footer'>
			<p>Copyright Ⓒ 2020 Adil Naqvi. All Rights Reserved.</p>
		</footer>
	);
}

export {Footer, StickyFooter};