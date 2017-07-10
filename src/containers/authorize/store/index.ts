import { createStore, combineReducers } from 'redux';

export default createStore(combineReducers({
    login: (s:string = '', a) => s,
    password: (s:string = '', a) => s,
    newPassword: (s:string = '', a) => s,
}));