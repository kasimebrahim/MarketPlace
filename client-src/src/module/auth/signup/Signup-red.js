import {REGISTER_USER} from './types';
export default (state={}, action={})=>{
	switch(action.type){
		case REGISTER_USER:
			console.log("register reducer");
			return{
				...state,
				...action.payload
			}
			break;
		default:
			return state;
	}
}
