import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./cards";
import Footer from "./footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex justify-content-around">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<br />
			<Footer />
		</div>
	);
};
export default Home;
