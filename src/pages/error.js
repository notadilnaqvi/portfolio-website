import React from "react";
import Title from "../components/title.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";

function PageNotFound() {
	return (
		<>
			<Title pageTitle="Error" />
			<Header />
			<div className="error-wrapper">
				<h1 className="error__text">Error 404</h1>
				<h1 className="error__subtext">Page not found!</h1>
				<h1 className="error__sad-smiley">: (</h1>
			</div>
			<Footer />
		</>
	);
}

export default PageNotFound;
