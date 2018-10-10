import { Assign } from "bx-utils";
import { combineReducers, createStore } from "redux";

export default createStore<Stores.Authorize.IAuthorizeStoreState>(combineReducers({
    user: (s: Stores.Authorize.IAuthorizeUser = { login: null }, a: any): Stores.Authorize.IAuthorizeUser => {
        switch (a.type) {
            case "change_login":
                console.log("dispach", a.login);
                return {...s, login: a.login };
            case "clear_login":
                return { login: null };
        }
        return s;
    },
}));
