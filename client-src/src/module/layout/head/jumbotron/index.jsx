import React from 'react';

export default class Jumbotron extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="jumbotron jumbotron-fluid jmb">
			  <div class="container">
			    <h1 class="display-4">Fluid jumbotron</h1>
			    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
			  </div>
			</div>
		);
	}
}
