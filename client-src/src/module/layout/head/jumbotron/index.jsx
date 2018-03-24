import React from 'react';

export default class Jumbotron extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="jumbotron jumbotron-fluid jmb">
			  <div className="container">
			    <h1 className="display-5">Fluid jumbotron</h1>
			    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
			  </div>
			</div>
		);
	}
}
