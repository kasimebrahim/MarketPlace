import { compose, applyMiddleware, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from "redux-logger";
import rootReducer from './reducers';

const middleware = [
  logger
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  rootReducer,
  {},
  enhancers
);


export { store };