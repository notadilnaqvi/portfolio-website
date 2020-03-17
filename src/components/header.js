import React from 'react';
import {Link} from 'react-router-dom';
import CornerBlobs from '../media/blobs/corner.png';


function Header() {
	return(
		<React.Fragment>
			<img src={CornerBlobs} alt='' className='corner-blobs'/>
			<header>
				<Link to='/' className='logo'>adilnaqvi<div className='dot'>.</div>com</Link>
				<nav>
					<ul className="nav__links">
						<li><Link to='/Syed Adil Hasan Naqvi Resume.pdf' target="_blank" className='link'>Resume</Link></li>
						<li><Link to='/projects' className='link'>Projects</Link></li>
						<li><Link to='/contact' className='link'>Contact</Link></li>
						<li><Link to='/about' className='link'>About</Link></li>
					</ul>
				</nav>
			</header>
			
		</React.Fragment>
	);
}

export default Header;

