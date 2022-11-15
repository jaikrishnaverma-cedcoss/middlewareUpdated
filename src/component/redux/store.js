import {createStore} from 'redux'
import {reducer } from './Reducer'
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const store =createStore(reducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export default store;