import React from 'react';
import emailIcon from '../media/icons/email-blob.png';
import githubIcon from '../media/icons/github-blob.png';
import behanceIcon from '../media/icons/behance-blob.png';
import skypeIcon from '../media/icons/skype-blob.png';
import lichessIcon from '../media/icons/lichess-blob.png';
import SocialsLink from './socialsLink.jsx';


function Socials(){
	return(
		<div className='socials'>
			<ul>
				<li>
					<SocialsLink src={emailIcon} link="adilnaqvi.ug@smme.edu.pk" url="mailto:adilnaqvi.ug@smme.edu.pk" text="Drop me an email"/>
				</li>
				<li>
					<SocialsLink src={skypeIcon} link="live:notadilnaqvi" url="https://web.skype.com/" text="Give me a call"/>
				</li>
				<li>
					<SocialsLink src={githubIcon} link="github.com/notadilnaqvi" url="https://github.com/notadilnaqvi" text="View my code"/>
				</li>
				<li>
					<SocialsLink src={behanceIcon} link="behance.net/notadilnaqvi" url="https://www.behance.net/notadilnaqvi/" text="See my designs"/>
				</li>

				<li>
					<SocialsLink src={lichessIcon} link="lichess.org/@/notadilnaqvi" url="https://lichess.org/@/notadilnaqvi" text="Watch me play"/>
				</li>
			</ul>
		</div>
	);
}

export default Socials;