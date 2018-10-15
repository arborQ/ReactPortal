const defaultState: Stores.IAuthorizeStoreState = {
    isAuthorized : false,
    user: null
};

export const authorizeReducer: Stores.StoreReducer<
  Stores.IAuthorizeStoreState
> = (state = defaultState, action) => {
  return state;
};

// export default createStore<Stores.Authorize.IAuthorizeStoreState>(combineReducers({
//     user: (s: Stores.Authorize.IAuthorizeUser = { login: null }, a: any): Stores.Authorize.IAuthorizeUser => {
//         switch (a.type) {
//             case "change_login":
//                 return {...s, login: a.login };
//             case "clear_login":
//                 return { login: null };
//         }
//         return s;
//     },
// }));
