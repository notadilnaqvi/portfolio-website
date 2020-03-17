import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CornerBlobs from '../media/blobs/corner.png';
import HamburgerButton from "../components/hamburgerButton.js";
import HamburgerMenu from "../components/hamburgerMenu.js";


class Header extends Component{

	state = {
		menuOpen: false
	};

	handleMenuToggle = () => {
		this.setState((prevState) => {
			return {menuOpen: !prevState.menuOpen};
		});
	};

	handleBackdropClick = () => {
		this.setState({menuOpen:false});
	};
	
	render() {
		let backdrop;

		if(this.state.menuOpen){
			backdrop = <div className="backdrop" onClick={this.handleBackdropClick}></div>;
		}
		return(
			<React.Fragment>
				<HamburgerMenu show={this.state.menuOpen}/>
				{backdrop}
				<img src={CornerBlobs} alt='' className='corner-blobs'/>
				<header>
					<Link to='/' className='logo'>adilnaqvi<div className='dot'>.</div>com</Link>
					<HamburgerButton menuClick={this.handleMenuToggle}/>
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
	
}

export default Header;

