import React from 'react';

export default class Breadcrumb extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<nav aria-label="breadcrumb row">
				  <ol className="breadcrumb">
				    <li className="breadcrumb-item"><a href="#">Home</a></li>
				    <li className="breadcrumb-item"><a href="#">Library</a></li>
				    <li className="breadcrumb-item active" aria-current="page">Data</li>
				  </ol>
				</nav>
			</div>
		);
	}
}
