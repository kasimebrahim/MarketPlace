import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {featchAllItems, isItemsLoaded} from "./actions/actions";

class Items extends React.Component {
	static propTypes = {
		featchAllItems: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		// this.setState({isLoading:true});
		this.props.isItemsLoaded({isLoaded:false});
		this.props.featchAllItems();
	}

	render() {
		if(!this.props.isLoaded){
			return (<h3>Loading</h3>);
		}
		console.log(this.props)
		const data = this.props.displayes;
		const listItems = data.map((item)=>
			<div key={item.id}>
				<h3 >{item.name? item.name: item.id}</h3>
				<h3 >{item.id}</h3>
			</div>
			);
		return (
			<div>
				{listItems}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		isLoaded:state.Items.isLoaded,
		allItems:state.Items.data,
		displayes:state.Items.data
	}
}

export default connect(mapStateToProps, {featchAllItems, isItemsLoaded})(Items);