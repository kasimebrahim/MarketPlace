import {LOGIN} from './types';
import axios from 'axios';
function login(user){
	return dispatch=>{
		axios.post('http://localhost:3001/api/Accounts/login', user).then((response)=>{
			dispatch({
				type:LOGIN,
				payload:{User:user}
			});
		}).catch((error)=>{
			dispatch({
				type:LOGIN,
				payload:{User:false}
			});
		});
	}
}

export {login};