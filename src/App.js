import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import About from './pages/about.js';
import PageNotFound from './pages/error-404.js';


function App() {
	return(
		<Router>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/projects' component={Projects}/>
				<Route exact path='/contact' component={Contact}/>
				<Route exact path='/about' component={About}/>
				<Route exact path='/error-404' component={PageNotFound}/>
				<Redirect to='/error-404'/>
			</Switch>
		</Router>
	);
}

export default App;
