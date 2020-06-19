import React from "react";
import Title from "../components/title.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";

function Uses() {
	return (
		<>
			<Title pageTitle="Uses" />
			<Header />
			<div className="footer-hack">
				<p className="uses-top-text">
					Tools I use for web development <br /> <br />
					Inspired by the{" "}
					<a
						href="https://uses.tech"
						target="_blank"
						rel="noopener noreferrer"
					>
						/uses
					</a>{" "}
					trend by{" "}
					<a
						href="https://wesbos.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Wes Bos
					</a>
				</p>
				<table>
					<tbody>
						<tr>
							<td className="uses-category">Editor</td>
							<td>VS Code</td>
						</tr>
						<tr>
							<td></td>
							<td className="table-space-hack">Atom</td>
						</tr>
						<tr>
							<td className="uses-category">Terminal</td>
							<td>Windows Terminal</td>
						</tr>

						<tr>
							<td></td>
							<td className="table-space-hack">
								Cool Retro Terminal
							</td>
						</tr>
						<tr>
							<td className="uses-category">Browser</td>
							<td>Edge Chromium</td>
						</tr>
						<tr>
							<td></td>
							<td className="table-space-hack">Firefox</td>
						</tr>
						<tr>
							<td className="table-space-hack uses-category">
								Git GUI
							</td>
							<td className="table-space-hack">GitKraken</td>
						</tr>
						<tr>
							<td className="table-space-hack uses-category">
								Registrar
							</td>
							<td className="table-space-hack">GoDaddy</td>
						</tr>

						<tr>
							<td className="table-space-hack uses-category">
								Hosting
							</td>
							<td className="table-space-hack">Netlify</td>
						</tr>
						<tr>
							<td className="uses-category">Design</td>
							<td>Figma</td>
						</tr>
						<tr>
							<td></td>
							<td className="table-space-hack">InkScape</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Footer />
		</>
	);
}

export default Uses;
