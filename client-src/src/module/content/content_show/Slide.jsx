import React from 'react';

export default class Slide extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="carousel-wrap">
				<div id="slide-show" className="carousel slide" data-ride="carousel">
				  <ol className="carousel-indicators">
				    <li data-target="#slide-show" data-slide-to="0" className="active"></li>
				    <li data-target="#slide-show" data-slide-to="1"></li>
				    <li data-target="#slide-show" data-slide-to="2"></li>
				  </ol>

				  <div className="carousel-inner">
				    <div className="carousel-item active">
				      <img className="d-block w-100" src="/assets/imgs/large/slide-1.jpg" alt="First slide" />
				      <div className='carousel-caption'>
				      	<h2 className='display-4'>Your Market</h2>
				      	<h4>The Best Market Place!</h4>
				      	<button type="button" className="btn btn-outline-light btn-lg">GetStarted</button>
				      	<button type="button" className="btn btn-lg">GetStarted</button>
				      </div>
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="/assets/imgs/large/slide-2.jpg" alt="Second slide" />
				      <div className='carousel-caption'>
				      	<h2 className='display-4'>Your Market</h2>
				      	<h4>The Best Market Place!</h4>
				      	<button type="button" className="btn btn-outline-light btn-lg">GetStarted</button>
				      	<button type="button" className="btn btn-lg">GetStarted</button>
				      </div>
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="/assets/imgs/large/slide-3.jpg" alt="Third slide"/>
				      <div className='carousel-caption'> 
				      	<h2 className='display-4'>Your Market</h2>
				      	<h4>The Best Market Place!</h4>
				      	<button type="button" className="btn btn-outline-light btn-lg">GetStarted</button>
				      	<button type="button" className="btn btn-lg">GetStarted</button>
				      </div>
				    </div>

				  </div>

				  <a className="carousel-control-prev" href="#slide-show" role="button" data-slide="prev">
				    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="sr-only">Previous</span>
				  </a>

				  <a className="carousel-control-next" href="#slide-show" role="button" data-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="sr-only">Next</span>
				  </a>
				</div>
			</div>
			
		);
	}
}
