import {LOGIN} from './types';

function LoginReducer(state={}, action={}){
	switch(action.type){
		case LOGIN:
			return{...state,user:'me'}
			break;
		default:
			return state;
			break;
	}
}

export default LoginReducer;