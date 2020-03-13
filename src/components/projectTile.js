import React from 'react';


function ProjectTile(props){

	const allTags = props.tags;
	const allTagDivs = allTags.map((tempTag) =>
		<div key={tempTag} className="tag">{tempTag}</div>
	)

	return(
		<div className="project-tile">
			<div className="tile-heading">{props.heading}</div>
			<div className="tile-tags">
				<div className="tag field">{props.field}</div>
				{allTagDivs}
				<div className="tag year">{props.year}</div>
			</div>
			<div className="tile-info">{props.info}</div>
			<div className="tile-link">
				<a href={props.url} target='_blank' rel="noopener noreferrer">{props.link}</a>
			</div>
		</div>
	);
}

export default ProjectTile;