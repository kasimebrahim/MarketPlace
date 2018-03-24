import React from 'react';

export default class Categories extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="list-group list-group-flush">
			  <a href="#" className="list-group-item list-group-item-action">Electrical Machineries</a>
			  <a href="#" className="list-group-item list-group-item-action">Mechanical Tools</a>
			  <a href="#" className="list-group-item list-group-item-action">Chemicals</a>
			  <a href="#" className="list-group-item list-group-item-action">Electronics</a>
			  <a href="#" className="list-group-item list-group-item-action disabled">Pants</a>
			</div>
		);
	}
}
