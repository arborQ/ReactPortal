declare namespace Services.Authorize {
  export interface ISyncAuthorize {
    isAuthorized: boolean;
    currentUser: Stores.Authorize.IUser | null;
  }

  export interface ISyncActions {
    setCurrentUser(token: string): void;
    clearCurrentUser(): void;
  }
}
