import { Assign } from "bx-utils";

export interface IAuthorizeUser {
    login: string | null;
    authorizedOn?: Date;
}

export interface IAuthorizeStoreState {
    user: IAuthorizeUser;
}

// export default createStore<IAuthorizeStoreState>(combineReducers({
//     user: (s: IAuthorizeUser = { login: null }, a: any): IAuthorizeUser => {
//         switch (a.type) {
//             case "change_login":
//                 return Assign(s, { login: a.login.trim(), authorizedOn: new Date() });
//             case "clear_login":
//                 return Assign(s, { login: null, authorizedOn: null });
//         }
//         return s;
//     },
// }));
