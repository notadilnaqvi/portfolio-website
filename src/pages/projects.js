import React from 'react';
import Title from '../components/title.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import ProjectTile from '../components/projectTile.js';


function Projects(){
	return(
		<>
			<Title pageTitle='Projects'/>
			<Header/>
			<hr/>
			<div className='projects-flex-wrapper'>

				{/* CS PROJECTS */}
				<ProjectTile
					heading='Portfolio website'
					tags={['Web design', 'React', 'HTML','CSS']}
					info='Made a responsive and modern portfolio website from scratch using the ReactJS framework'
					link='View on Github'
					url='https://www.github.com/notadilnaqvi/portfolio-website'
					field='CS'
					year='2020'
				/>

				<ProjectTile
					heading='Color classifier'
					tags={['Machine learning', 'sklearn', 'Python', 'JavaScript']}
					info='Crowd-sourced and preprocessed training data to train a neural network to classify colors
					based on their RGB value. Achieved 92% accuracy'
					link='View on Github'
					url='https://www.github.com/notadilnaqvi/sahnbk.github.io'
					field='CS'
					year='2019'
				/>

				<ProjectTile
					heading='Traveling salesman problem'
					tags={['Genetic algorithm', 'Matlab', 'OOP']}
					info='Implemented genetic algorithm (with mutation) in Matlab to solve the classic traveling salesman problem. Achieved optimal
					path for 20 cities within 30s'
					link='View on Github'
					url='https://github.com/notadilnaqvi/traveling-salesman'
					field='CS'
					year='2018'
				/>

				<ProjectTile
					heading='Glass identification'
					tags={['SVM', 'KNN', 'sklearn','Python']}
					info='Used KNN, SVM &amp; NN to classify glass based on its composition. Observed merits and
					demerits of each method. Achieved 72%, 81% &amp; 83% accuracy respectively'
					link='View on Github'
					url='https://github.com/notadilnaqvi/glass-identification'
					field='CS'
					year='2019'
				/>

				<ProjectTile
					heading='Dictionary using treaps'
					tags={['Data structures', 'C++']}
					info='Implemented treaps data structure in C++ to make a functional dictionary with word addition, search and, deletion capabilities'
					link='View on Github'
					url='https://github.com/notadilnaqvi/dictionary-using-treaps'
					field='CS'
					year='2019'
				/>

				<ProjectTile
					heading='SCARA kinematics'
					tags={['Kinematics','Matlab']}
					info='Programmed forward and inverse kinematics for SCARA robot with GUI in Matlab'
					// link='view on Github'
					field='Robotics'
					year='2018'
				/>

				{/* COMMUNITY SERVICE PROJECTS */}
				<ProjectTile
					heading='Water conservation drive'
					tags={['Awareness drive']}
					info='Condected a water conservation drive at Army Public School, Rawalpindi to spread awareness during the 2018 Pakistan water crisis'
					link='View PDF report'
					url='/Water Conservation Drive Report.pdf'
					field='Community service'
					year='2019'
				/>

				<ProjectTile
					heading='Wall of Kindness'
					tags={['Donation drive']}
					info='Collected, cleaned and distributed 100+ items of clothing to Wall of Kindness, Rawalpindi'
					link='View PDF report'
					url='/Wall of Kindness Report.pdf'
					field='Community service'
					year='2018'
				/>

				<ProjectTile
					heading='Blood donation drive'
					tags={['Donation drive']}
					info='Conducted a blood donation drive at NUST as a member of NUST Community Service Club'
					link='View event on FB'
					url='https://www.facebook.com/events/184134498817127/'
					field='Community service'
					year='2017'
				/>

				{/* MECH. PROJECTS */}
				<ProjectTile
					heading='UAV landing gear design'
					tags={['SolidWorks','Simulink','ANSYS']}
					info='Designed an oleo strut for a UAV and ran dynamic analysis to evaluate crashworthiness. Fabricated a scaled down model'
					link='View PDF report'
					url='/UAV Landing Gear Design Report.pdf'
					field='Mech.'
					year='2019'
				/>

				<ProjectTile
					heading='Pressure hull design'
					tags={['SolidWorks', 'ANSYS']}
					info='Designed a basic submarine’s pressure hull from scratch in SolidWorks and ran static analysis using ANSYS. Achieved 1.7 factor of safety'
					link='View PDF report'
					url='/Pressure Hull Design Report.pdf'
					field='Mech.'
					year='2018'
				/>

				<ProjectTile
					heading='Automatic braking system'
					tags={['Ardiono','Lab View']}
					info='Implemented automatic braking system on an RC car using Arduino UNO and ultrasonic sensor with data acquisition in Lab View'
					link='View PDF report'
					url='/Automatic Braking System Report.pdf'
					field='Mech.'
					year='2018'
				/>

				<ProjectTile
					heading='Pipe network design'
					tags={['Fluid dynamics','Pipe Flow Expert']}
					info='Designed and fabricated a pipe network to achieve given pressure heads at 7 terminals. Achieved results within 10% of required heads '
					link='View PDF report'
					url='/Pipe Network Analysis Report.pdf'
					field='Fluid'
					year='2017'
				/>

				<ProjectTile
					heading='Solar still'
					tags={['Heat & mass transfer']}
					info='Theoretically analyzed solar still incorporated with pinned wick, water sprinkler, and PCM with design improvements'
					link='View PDF report'
					url='/Solar Still Report.pdf'
					field='Thermo.'
					year='2018'
				/>

				<ProjectTile
					heading='Cooling load of car'
					tags={['HVAC']}
					info='Theoretically determined the load required to cool a simplified car cabin'
					link='View PDF report'
					url='/Cooling Load of Car Report.pdf'
					field='Thermo.'
					year='2018'
				/>

				{/* <div className='project-tile-hack'></div> */}
			</div>
			<Footer/>
		</>
	);
}

export default Projects;