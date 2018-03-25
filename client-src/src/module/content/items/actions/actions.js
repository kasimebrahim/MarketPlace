import {FEATCH_ALL_ITEMS} from"./types";
import {IS_LOADING} from "./types";
import axios from 'axios';

function featchAllItems(){
	return (dispatch)=>{
		// TODO: items loading
		// isItemsLoading({isLoading:true});
		axios.get('http://192.168.1.6:3001/api/Items').then((response)=>{
			dispatch({
				type:FEATCH_ALL_ITEMS,
				payload:{
					...response,
					isLoaded:true
				}
			});
		}).catch((err)=>{
			dispatch({
				type:FEATCH_ALL_ITEMS,
				payload:{err,isLoaded:true}
			});
		});
	};
}

function isItemsLoaded(isLoading){
	return (dispatch)=>{
		dispatch({
			type:IS_LOADING,
			payload:isLoading
		});
	}
}

export {featchAllItems, isItemsLoaded};