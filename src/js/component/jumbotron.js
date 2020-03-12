import React from "react";

//Jumbotron component
const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="jumbotron-title display-4">Hello, world!</h1>
			<p className="jumbotron-text1 lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
};
export default Jumbotron;
