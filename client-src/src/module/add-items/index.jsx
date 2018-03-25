import React from 'react';

export class AddItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="container">
				<div className="row">
				  	<div className="form-group col-6">
				    	<label for="item-name">Item Name</label>
				    	<input type="text" className="form-control" id="item-name" aria-describedby="nameHelp" placeholder="Item Name" />
				    	<small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				  	</div>
				  	<div className="form-group col-6">
				    	<label for="exampleInputPassword1">Tags</label>
						<select className="selectpicker form-control" aria-describedby="tagHelp" data-live-search="true">
							<option data-tokens="ketchup mustard">Hot Dog, Fries and a Soda</option>
					  		<option data-tokens="mustard">Burger, Shake and a Smile</option>
					  		<option data-tokens="frosting">Sugar, Spice and all things nice</option>
						</select>
						<small id="tagHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				  	</div>
				</div>
				<div className="row">
				  	<div className="form-group col-6">
				    	<label for="exampleInputPassword1">Password</label>
				    	<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				  	</div>
				</div>
				<div className="row">
			  		<div className="col-12">
			  			<button type="submit" className="btn btn-primary">Submit</button>
			  		</div>
				</div>
			</form>
		);
	}
}
