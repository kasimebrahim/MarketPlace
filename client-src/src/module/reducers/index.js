import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerOne from './reducer-one';
import reducerTwo from './reducer-two';

export default combineReducers({
  routing: routerReducer
});
