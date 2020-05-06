import React from 'react';
// import read1 from "../media/tiles/tgost-tile.png";
import read2 from "../media/tiles/tfm-tile.png";
import read3 from "../media/tiles/aot-tile.png";

import watch1 from "../media/tiles/dave-tile.png";
import watch2 from "../media/tiles/chess-tile.png";

import listen1 from "../media/tiles/shoptalk-tile.png";
import listen3 from "../media/tiles/jbo-tile.png";

import play1 from "../media/tiles/aoe-tile.png";

import learn1 from "../media/tiles/flutter-tile.png";


function EnjoyedStuff(){
	return(
		<div className='enjoyed-stuff-flex-wrapper'>
			<div className="about-heading">What I'm reading</div>	
			<div className="enjoyed-segment">
				{/* <img src={read1} alt=""/> */}
				<img src={read2} alt=""/>
				<img src={read3} alt=""/>
			</div>

			<div className="about-heading">What I'm watching</div>	
			<div className="enjoyed-segment">
				<img src={watch1} alt=""/>
				<img src={watch2} alt=""/>
			</div>

			<div className="about-heading">What I'm listening to</div>	
			<div className="enjoyed-segment">
				<img src={listen1} alt=""/>
				<img src={listen3} alt=""/>
			</div>

			<div className="about-heading">What I'm playing</div>	
			<div className="enjoyed-segment">
				<img src={play1} alt=""/>
			</div>

			<div className="about-heading">What I'm learning</div>	
			<div className="enjoyed-segment">
				<img src={learn1} alt=""/>
			</div>
		</div>
	);
}

export default EnjoyedStuff;