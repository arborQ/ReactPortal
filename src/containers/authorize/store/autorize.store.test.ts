// test("authorize store exists", () => {
//     expect(store).toBeDefined();
// });

// test("authorize store get initial state", () => {
//     const state = store.getState();
//     expect(state).toBeDefined();
//     expect(state.user).toBeDefined();
//     expect(state.user.login).toBeNull();
//     expect(state.user.authorizedOn).toBeNull();
// });

// test("action Login change state", () => {
//     const userLogins = [
//         "arbor",
//         "1",
//         "xxxxxx  xxxx",
//         "     d",
//     ];

//     userLogins.forEach((userLogin: string) => {

//         const state = store.getState();
//         store.dispatch({ type: "change_login", login: userLogin });
//         const newState = store.getState();

//         expect(state).not.toEqual(newState);
//         expect(typeof newState.user.login).toEqual("string");
//         expect(newState.user.login).toEqual(userLogin.trim());
//         expect(newState.user.authorizedOn).not.toBeNull();
//         expect(newState.user.authorizedOn instanceof Date).toBeTruthy();
//     });
// });

// test("unknown action don't change login", () => {
//     const state = store.getState();
//     const userLogin = state.user.login;

//     store.dispatch({ type: "unknown", login: "new login" });
//     const newState = store.getState();
//     expect(newState.user.login).toEqual(userLogin);
// });

// test("logout clears user data", () => {
//     store.dispatch({ type: "clear_login" });
//     const newState = store.getState();
//     expect(newState.user.login).toBeDefined();
//     expect(newState.user.login).toBeNull();

//     expect(newState.user.authorizedOn).toBeDefined();
//     expect(newState.user.authorizedOn).toBeNull();
// });
