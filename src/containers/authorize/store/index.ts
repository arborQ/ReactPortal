import { createStore, combineReducers } from 'redux';

export default createStore(combineReducers({
    login: (s:IAuthorizeLoginState = { login: '', password: '' }, a) => {
        switch(a.type) {
            case 'change_login':
                return Object.assign({}, s, { login: a.login }) ;
            case 'change_password':
                return Object.assign({}, s, { password: a.password }) ;
        }
        return s;
    }
}));

export interface IAuthorizeLoginState {
    login: string;
    password: string;
}