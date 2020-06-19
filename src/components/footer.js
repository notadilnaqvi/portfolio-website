import React from "react";
import BottomBlobs from "../media/blobs/bottom.png";

function Footer() {
	return (
		<footer>
			{/* <img src={BottomBlobs} alt='' className='bottom-blobs'/> */}
			<div className="footer__text">
				<div>Copyright &copy; 2020 Adil Naqvi.&nbsp;</div>
				<div>All Rights Reserved.&nbsp;</div>
				<div>Open source under MIT License.&nbsp;</div>
				<div>
					Made with{" "}
					<span role="img" aria-label="heart">
						❤️
					</span>{" "}
					in React.
				</div>
			</div>
			<a href="#" target="_blank" rel="noopener noreferrer">
				Source Code
			</a>
		</footer>
	);
}

export default Footer;
