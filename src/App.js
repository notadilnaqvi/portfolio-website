import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Home from "./pages/home.js";
import Projects from "./pages/projects.js";
import Contact from "./pages/contact.js";
import Uses from "./pages/uses.js";
import About from "./pages/about.js";
import PageNotFound from "./pages/error.js";
import ScrollToTop from "./components/scrollToTop.js";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
				<Route exact path="/uses" component={Uses} />
				<Route exact path="/error" component={PageNotFound} />
				<Redirect to="/error" />
			</Switch>
		</Router>
	);
}

export default App;
