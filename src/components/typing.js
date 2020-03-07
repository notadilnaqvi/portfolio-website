import React from 'react';
import Typical from 'react-typical'


function Typing(){
	return(
		<p className='typing-wrapper'>
			I'm a mechanical engineer<br/>who loves to&nbsp;
			<Typical
				className='typing-text'
				steps={['code', 3000, 'design', 3000]}
				loop={Infinity}
				wrapper="p"
			/>
		</p>

	);
}

export default Typing;