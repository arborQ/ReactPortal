export class SetUserAction implements Stores.IStoreAction<Stores.IAuthorizeStoreState> {
    type: number = 1;
    action(state: Stores.IAuthorizeStoreState, user: Stores.Authorize.IUser): Stores.IAuthorizeStoreState {
        return {...state, ... { isAuthorized: user !== null, user }};
    }
}
