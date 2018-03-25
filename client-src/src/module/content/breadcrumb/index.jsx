import React from 'react';

export default class Breadcrumb extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<nav aria-label="breadcrumb" className="row">
				  	<ol className="breadcrumb breadcrumb-main col-md-5 col-sm-12 justify-content-end no-margin-padding">
				    	<li className="breadcrumb-item"><a href="#">Electrical Machinery</a></li>
				    	<li className="breadcrumb-item"><a href="#">Library</a></li>
				    	<li className="breadcrumb-item active" aria-current="page">Data</li>
				  	</ol>
				  	<div className="input-group mb-5 col-md-4 col-sm-12 no-margin-padding">
					  	<input type="text" className="form-control" placeholder="Search" aria-label="Search in category"/>
					  	<div className="input-group-append">
					    	<button className="btn btn-outline-secondary" type="button">Search</button>
					  	</div>
					</div>
				</nav>
			</div>
		);
	}
}
