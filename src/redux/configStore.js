import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import word from './modules/word';

const middlewares = [thunk];
const roootReducer = combineReducers({ word });
const enhancer = applyMiddleware(...middlewares);

const store = createStore(roootReducer, enhancer);

export default store;
