import axios from 'axios';
import {REGISTER_USER} from './types';

function registerUser(user){
	return (dispatch)=>{
		console.log("dispatch method");
		axios.post('http://localhost:3001/api/Accounts', user)
	  		.then((response) => {
		    dispatch({
				type:REGISTER_USER,
				payload:{SignupStat:true}
			});
		  	})
		  	.catch((error) => {
				dispatch({
					type:REGISTER_USER,
					payload:{SignupStat:error}
				});
		  	});
	};
}

export {registerUser};