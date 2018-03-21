import { combineReducers } from 'redux';
import {itemsReducer} from '../content/items';
import { SignupReducer, LoginReducer} from '../../module';

export default combineReducers({
	Items:itemsReducer,
	Signup:SignupReducer,
	User:LoginReducer
});
