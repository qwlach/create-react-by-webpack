import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import AllReducer from './reducers/rootReduce';

const logger = createLogger({
  // ...options
  level: 'log'
});

export default function configureStore() {
  const store = createStore(AllReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
  return store;
}
