import React from 'react';
import Title from '../components/title.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';


function Uses(){
	return(
		<>
			<Title pageTitle='/uses'/>
			<Header/>
			<hr/>
            <div className="uses-wrapper">
                <h1 className="uses-heading">My web development tools</h1>
                <p className="uses-sub-heading">Inspired by <a href="https://wesbos.com" className="uses-sub-heading-link">Wes Bos</a></p>
                <ul>
                    <li className="uses-li"><b>Editor:</b> VS Code</li>
                    <li className="uses-li"><b>Terminal:</b> Windows Terminal</li>
                    <li className="uses-li"><b>Prototyping:</b> Figma</li>
                    <li className="uses-li"><b>Git GUI:</b> Git Kraken</li>
                    <li className="uses-li"><b>Hosting:</b> Netlify</li>
                    <li className="uses-li"><b>Vector graphics:</b> InkScape</li>
                    <li className="uses-li"><b>Machine:</b> Dell Inspiron 15 - 4 GB Core i3 1.9 GHz</li>
                </ul>
            </div>

			<Footer/>
		</>
	);
}

export default Uses;