import React from 'react';

export default class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer>
				<div className="container-fluid">
					<div className="row text-center">
						<div className="col-md-4">
							<img src="/assets/imgs/logo2.svg" alt="logo"/>
							<hr className="light"/>
							<p>+111 1111 111</p>
							<p>email@something.thing</p>
							<p>a goddamn address</p>
						</div>

						<div className="col-md-4">
							<hr className="light"/>
							<h5>Office Hour</h5>
							<hr className="light"/>
							<p>every goddamn day</p>
						</div>

						<div className="col-md-4">
							<hr className="light"/>
							<h5>Our Services</h5>
							<hr className="light"/>
							<p>every goddamn thing</p>
						</div>
					</div>
					<div className="row text-center">
						<div className="col">
							<hr className="light"/>
							<h5>&copy; myweb.com</h5>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
