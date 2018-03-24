import React from 'react';
import Slide from './Slide';
import Categories from './Categories';
import Invite from './Invite';

export default class ContentShow extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="show-left-col col-md-3 col-sm-12 order-md-1 order-sm-3 order-3">
						<Categories />
					</div>
					<div className="show-mid-col col-md-6 col-sm-12 order-md-2 order-sm-1 order-1">
						<Slide />
					</div>
					<div className="show-right-col col-md-3 col-sm-12 order-md-3 order-sm-2 order-2">
						<Invite />
					</div>
				</div>
			</div>
		);
	}
}
