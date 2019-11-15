import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./cards";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-around">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
export default Home;
