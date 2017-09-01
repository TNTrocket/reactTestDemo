import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/main';
import api from '../middleware/api';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunkMiddleware,api)
);

export default store