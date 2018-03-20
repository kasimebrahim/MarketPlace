import { combineReducers } from 'redux';
import {itemsReducer} from '../content/items'

export default combineReducers({
	Items:itemsReducer
});
