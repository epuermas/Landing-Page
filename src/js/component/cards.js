import React from "react";

//Card component
const Card = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://i.imgur.com/6dNaDpP.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Sample Card Title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
export default Card;
