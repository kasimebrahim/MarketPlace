import React from 'react';

export default class Invite extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="text-center">
				<div className="container ">
				    <h3 className="display-5 text-secondary">Sell For Free</h3>
				    <p className="text-secondary">You can add your products and some other detail here goes.</p>
				    <button type="button" className="btn btn-outline-dark btn-md">GetStarted</button>
				</div>
				<hr/>
				<div className="container">
				    <h3 className="display-5">Unlimited</h3>
				    <p className="text-secondary">You can add your products same here a lot of detail.</p>
				    <button type="button" className="btn btn-lg btn-md">GetStarted</button>
				</div>
			</div>
		);
	}
}
