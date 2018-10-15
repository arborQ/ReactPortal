declare namespace Stores {
  export interface IAuthorizeStoreState {
    isAuthorized: boolean;
    user: Authorize.IUser | null;
  }

  export interface IGlobalStore {
    authorize: IAuthorizeStoreState;
  }

  export interface IStoreAction<S> {
    type: number;
    action<T>(state: S, action: any): S;
  }

  export type StoreReducer<P> = (state: P, action: any) => P;

  export type IGlobalReducers = {
    [P in keyof IGlobalStore]: StoreReducer<IGlobalStore[P]>
  };

  export interface IAuthorizeStoreState {}
}
