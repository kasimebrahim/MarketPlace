import {LOGIN} from './types';
import axios from 'axios';
import setToken from '../../utils/Authorization';
function login(user){
	return dispatch=>{
		axios.post('http://localhost:3001/api/Accounts/login', user).then((response)=>{
			localStorage.setItem("jwt", response.data.id);
			setToken(response.data.id);
			dispatch({
				type:LOGIN,
				payload:{...response}
			});
		}).catch((error)=>{
			dispatch({
				type:LOGIN,
				payload:{...error.response}
			});
		});
	}
}

export {login};