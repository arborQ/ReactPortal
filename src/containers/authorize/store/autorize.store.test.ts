import store from "./index";

test("authorize store exists", () => {
    expect(store).toBeDefined();
});

test("authorize store get initial state", () => {
    const state = store.getState();
    expect(state).toBeDefined();
    expect(state.user).toBeDefined();
    expect(state.user.login).toBeNull();
});
