import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import albums from "./albums";
import todos from "./photos";


const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    albums: albums,
    todos: todos
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


export default store;