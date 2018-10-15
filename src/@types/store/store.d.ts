declare namespace Stores {
  export interface IAuthorizeStoreState {
    isAuthorized: boolean;
    user: any | null;
  }

  export interface IGlobalStore {
    authorize: IAuthorizeStoreState;
  }

  export interface IStoreAction {
    type: number;
    data: any;
  }

  export type StoreReducer<P> = (state: P, action: IStoreAction) => P;

  export type IGlobalReducers = {
    [P in keyof IGlobalStore]: StoreReducer<IGlobalStore[P]>
  };

  export interface IAuthorizeStoreState {}
}
