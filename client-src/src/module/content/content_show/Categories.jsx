import React from 'react';

export default class Categories extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="list-group list-group-flush">
			  <a href="#" class="list-group-item list-group-item-action">Electrical Machineries</a>
			  <a href="#" class="list-group-item list-group-item-action">Mechanical Tools</a>
			  <a href="#" class="list-group-item list-group-item-action">Chemicals</a>
			  <a href="#" class="list-group-item list-group-item-action">Electronics</a>
			  <a href="#" class="list-group-item list-group-item-action disabled">Pants</a>
			</div>
		);
	}
}
