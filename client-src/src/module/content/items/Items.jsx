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
		this.state={
		}

		// this.renderItem=this.renderItem.bind(this);
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
			<h3 key={item.id}>{item.name? item.name: item.id}</h3>
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
