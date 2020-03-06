import React from 'react';
import {Link} from 'react-router-dom';
import Pdf from '../media/fakey-dakey.pdf';


function Header() {
	return(
		<header>
			<Link to='/' className='logo'>adilnaqvi<div className='dot'>.</div>com</Link>
			<nav>
				<ul className="nav__links">
					<li><a href={Pdf} className='resume' target='_blank' rel='noopener noreferrer'>resume</a></li>
					<li><Link to='/' className='link'>projects</Link></li>
					<li><Link to='/contact' className='link'>contact</Link></li>
					<li><Link to='/about' className='link'>about</Link></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;