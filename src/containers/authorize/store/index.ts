import { createStore, combineReducers } from 'redux';

export default createStore(combineReducers({
    login: (s:IAuthorizeLoginState = { login: null }, a: any) => {
        switch(a.type) {
            case 'change_login':
                return Object.assign({}, s, { login: a.login }) ;
        }
        return s;
    }
}));

export interface IAuthorizeLoginState {
    login: string;
}