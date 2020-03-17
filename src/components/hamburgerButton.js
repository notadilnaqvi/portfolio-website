import React from 'react';


const HamburgerButton = props => {
	return(
		<button className="hamburger" onClick={props.menuClick}>
			<div className="hamburger-line"></div>
			<div className="hamburger-line"></div>
			<div className="hamburger-line"></div>
		</button>
	);
}

export default HamburgerButton;