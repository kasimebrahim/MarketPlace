import React from 'react';
import Slide from './Slide';

export default class ContentShow extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-12 order-md-1 order-sm-3 order-3">
						<h1 className="display-2">first</h1>
					</div>
					<div className="col-md-6 col-sm-12 order-md-2 order-sm-1 order-1">
						<Slide />
					</div>
					<div className="col-md-3 col-sm-12 order-md-3 order-sm-2 order-2">
						<h1 className="display-2">third</h1>
					</div>
				</div>
			</div>
		);
	}
}
