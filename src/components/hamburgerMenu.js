import React from 'react';
import {Link} from 'react-router-dom';


const HamburgerMenu = props => {

	let menuClass = "hamburger-wrapper";
	if(props.show){
		menuClass = "hamburger-wrapper open";
	}
	
	return(
		<div className={menuClass}>
			
			<ul>
				<li><Link to='/' className='hamburger-link'>Home</Link></li>
				<li><Link to='/about' className='hamburger-link'>About</Link></li>
				<li><Link to='/contact' className='hamburger-link'>Contact</Link></li>
				<li><Link to='/projects' className='hamburger-link'>Projects</Link></li>
				<li><Link to='/Syed Adil Hasan Naqvi Resume.pdf' target="_blank" className='hamburger-link'>Resume</Link></li>
			</ul>
		</div>
	);
}

export default HamburgerMenu;