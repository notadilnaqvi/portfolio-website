import React from 'react'
import Arrow from '../media/arrow.png';


function Know(){
	return(
	<div className='know-more-wrapper'>
		<div className='know-more'>know more about me</div>
		<img className='know-more-arrow' src={Arrow} alt=""/>
	</div>
	);
}

export default Know;