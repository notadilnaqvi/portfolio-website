import React from 'react'
import Arrow from '../media/arrow.png';


function ArrowThing(){
	return(
	<div className='arrow-thing-flex-wrapper'>
		<div className='arrow-thing-text'>Know more about me</div>
		<img className='arrow-thing-image' src={Arrow} alt=""/>
	</div>
	);
}

export default ArrowThing;