import React from 'react';
import Title from '../components/title.js';
import {Footer} from '../components/footer.js';
import Header from '../components/header.js';
import ProjectTile from '../components/projectTile.js';


function Projects(){
	return(
		<>
			<Title pageTitle='Projects'/>
			<Header/>
			<hr/>
			<div className='projects-flex-wrapper'>
				<ProjectTile
					heading='Portfolio website'
					tags={['Web design', 'React', 'HTML','CSS']}
					info='Made a responsive and modern portfolio website from scratch using the ReactJS framework'
					link='view on Github'
					url='https://www.github.com/notadilnaqvi/portfolio-website'
					field='CS'
					year='2020'
				/>

				<ProjectTile
					heading='Color classifier'
					tags={['Machine learning', 'sklearn', 'Python', 'JavaScript']}
					info='Crowd sourced and preprocessed color data manually and trained a model to classify colors based on their RGB value'
					link='view on Github'
					url='https://www.github.com/notadilnaqvi/portfolio-website'
					field='CS'
					year='2019'
				/>

				<ProjectTile
					heading='Traveling salesman problem'
					tags={['Genetic algorithm', 'Matlab', 'OOP']}
					info='Implemented genetic algorithm (with mutation) in Matlab to solve the classic traveling salesman problem'
					link='view on Github'
					field='CS'
					year='2018'
				/>

				<ProjectTile
					heading='Dictionary using treaps'
					tags={['Data structures', 'C++']}
					info='Implemented treaps data structure in C++ to make a functional dictionary with word addition, search and, deletion capabilities'
					link='view on Github'
					field='CS'
					year='2019'
				/>

				<ProjectTile
					heading='Glass identification'
					tags={['SVM', 'KNN', 'sklearn','Python']}
					info='Implemented 3 methods (SVM, KNN, NN) to classify 9 types of glass based on its composition'
					link='view on Github'
					field='CS'
					year='2019'
				/>

				<ProjectTile
					heading='Water conservation drive'
					tags={['Awareness']}
					info='Condected a water conservation drive at Army Public School, Rawalpindi to spread awareness during the 2018 Pakistan water crisis'
					link='view PDF report'
					field='Community service'
					year='2019'
				/>

				<ProjectTile
					heading='Wall of Kindness'
					tags={['Donation drive']}
					info='Collected, cleaned and distributed 100+ items of clothing to Wall of Kindness, Rawalpindi'
					link='view PDF report'
					field='Community service'
					year='2018'
				/>
				<ProjectTile
					heading='Blood donation drive'
					tags={['Donation drive']}
					info='Conducted a blood donation drive at NUST as a member of NUST Community Service Club'
					link='view event on FB'
					field='Community service'
					year='2017'
				/>
				<div className='project-tile-hack'></div>
			</div>
			<Footer/>
		</>
	);
}

export default Projects;