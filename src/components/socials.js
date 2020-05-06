import React from 'react';
import emailIcon from '../media/icons/email-blob.png';
import githubIcon from '../media/icons/github-blob.png';
import behanceIcon from '../media/icons/behance-blob.png';
import fbIcon from '../media/icons/fb-blob.png';
import lichessIcon from '../media/icons/lichess-blob.png';


function Socials(){
	return(
		<div className='socials'>
			<ul>
				<li>
					<a href="mailto: adilnaqvi.ug@smme.edu.pk" className='social-links email' id='email'>
						<span>Drop me an email</span>
					</a>
					<img className='socials-icon' src={emailIcon} alt=""/>
				</li>
				<li>
					<a href="https://github.com/notadilnaqvi" target="_blank" rel="noopener noreferrer" className='social-links github'>
						<span>View my code</span>
					</a>
					<img className='socials-icon' src={githubIcon} alt=""/>
				</li>
				<li>
					<a href="https://www.behance.net/notadilnaqvi" target="_blank" rel="noopener noreferrer" className='social-links behance'>
						<span>See my designs</span>
					</a>
					<img className='socials-icon' src={behanceIcon} alt=""/>
				</li>
				<li>
					<a href="https://www.facebook.com/notadilnaqvi" target="_blank" rel="noopener noreferrer" className='social-links fb'>
						<span>Know me better</span>
					</a>
					<img className='socials-icon' src={fbIcon} alt=""/>
				</li>
				<li>
					<a href="https://lichess.org/@/notadilnaqvi" target="_blank" rel="noopener noreferrer" className='social-links lichess'>
						<span>Watch me play</span>
					</a>
					<img className='socials-icon' src={lichessIcon} alt=""/>
				</li>
			</ul>
		</div>
	);
}

export default Socials;