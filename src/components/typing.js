import React from 'react';
import Typical from 'react-typical'


function Typing(){
	return(
		<div className='typing-wrapper'>
			I'm a mechanical engineer<br/>who loves&nbsp;
			<Typical
				className='typing-text'
				steps={['to code', 3000,
						'chess', 2000,
						'to design', 3000,
						'minimalism', 2000,
				]}
				loop={Infinity}
				wrapper="p"
			/>
		</div>

	);
}

export default Typing;