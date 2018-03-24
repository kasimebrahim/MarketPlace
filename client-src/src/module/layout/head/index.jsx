import React, { Component } from 'react';
import NavBar from './navbar';
import Jumbotron from './jumbotron';
import Sticky from 'react-stickynode';

export default class Head extends Component {
	render() {
		return (
			<div className="head">
				<Jumbotron />
				<Sticky enabled={true} top={0} bottomBoundary="#bottom">
				    <NavBar/>
				</Sticky>
			</div>
		);
	}
}
