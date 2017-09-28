import { Assign } from "bx-utils";
import { combineReducers, createStore } from "redux";

export interface IAuthorizeUser {
    login: string;
}

export interface IAuthorizeStoreState {
    user: IAuthorizeUser;
}

export default createStore<IAuthorizeStoreState>(combineReducers({
    user: (s: IAuthorizeUser = { login: null }, a: any): IAuthorizeUser => {
        switch (a.type) {
            case "change_login":
                return Assign(s, { login: a.login });
        }
        return s;
    },
}));
