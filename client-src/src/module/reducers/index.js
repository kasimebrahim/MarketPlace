import { combineReducers } from 'redux';
import {itemsReducer} from '../content/items';
import { SignupReducer } from '../../module';

export default combineReducers({
	Items:itemsReducer,
	Signup:SignupReducer
});
