import { Assign } from "bx-utils";
import { combineReducers, createStore } from "redux";

type IUserStoreState = Application.Users.IUserStoreState;

export default createStore<IUserStoreState>(combineReducers({
    user: (s: IUserStoreState = { users: [] }, a: any): IUserStoreState => {
        return s;
    },
}));
