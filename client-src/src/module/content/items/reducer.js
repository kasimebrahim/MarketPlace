import {FEATCH_ALL_ITEMS, IS_LOADING} from './actions/types';

export default (state={}, action={})=>{
	switch(action.type) {
	    case FEATCH_ALL_ITEMS:
	        console.log("action received");
	        return {
	        	...state,
	        	...action.payload,
	        };
	        break;
	    case IS_LOADING:
	        return {
	        	...state,
	        	...action.payload,
	        };
	    	break;
	    default:
	    	return state;
	}
}