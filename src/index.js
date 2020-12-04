import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Style.css';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const initialState = {
    todos: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'start_checking':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.id === action.payload) {
                        return{
                            ...todo,
                            checking: true
                        }
                    }

                    return todo
                })
            }

        case 'check':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.id === action.payload) {
                        return{
                            ...todo,
                            completed: !todo.completed,
                            checking: false
                        }
                    }

                    return todo
                })
            }

        case 'start_deleting':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return{
                            ...todo,
                            deleting: true
                        }
                    }

                    return todo
                })
            }

        case 'delete':
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    if(todo.id === action.payload) {
                        return false
                    }

                    return true
                })
            }

        case 'start':
            return {
                ...state,
                loading: true
            }

        case 'load':
            return {
                ...state,
                todos: action.payload,
                loading: false
            }

        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
