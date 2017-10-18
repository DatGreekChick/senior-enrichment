import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// https://github.com/evgenyrodionov/redux-logger
import createLogger from 'redux-logger';
// https://github.com/gaearon/redux-thunk
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);