import {LOGIN} from './types';
import axios from 'axios';
function login(user){
	return dispatch=>{
		axios.post('url', user).then((response)=>{
			dispatch({
				type:LOGIN,
				payload:user
			});
		}).catch((error)=>{
			dispatch({
				type:LOGIN,
				payload:false
			});
		});
	}
}

export {login};