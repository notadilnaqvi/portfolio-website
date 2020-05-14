import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class SocialsLink extends Component{

	state = {
        linkShown: false,
        copied: false,
	};

	handleLinkToggle = () => {
		this.setState((prevState) => {
			return {linkShown: !prevState.linkShown};
		});
	};

	handleIconClick = () => {
		this.setState({linkShown:false});
	};
	
	render() {
        let linkClass = "link_hidden";
        let  defaultLinkTextClass = "defaultLinkText_shown"

		if(this.state.linkShown){
            linkClass = "link_shown";
            defaultLinkTextClass = "defaultLinkText_hidden"
		}
		return(
            <>
                <p className={defaultLinkTextClass}>{this.props.text}</p>
                <div className={linkClass}>
                    <a href={this.props.url} target = "_blank" rel="noopener noreferrer" className='social-links'>{this.props.link}</a>
                    <CopyToClipboard text={this.props.link}>
          				<button class="social_link_button">Copy</button>
       				</CopyToClipboard>
                </div>
                <img src={this.props.src} alt="" className='socials-icon' onClick={this.handleLinkToggle}/>
            </>
		);
	}
	
}

export default SocialsLink;