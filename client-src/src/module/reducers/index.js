import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerOne from './reducer-one';
import reducerTwo from './reducer-two';
import itemReducer from '../items/reducers/itemsReducer'

export default combineReducers({
  routing: routerReducer,
  itemReducer: itemReducer
});
