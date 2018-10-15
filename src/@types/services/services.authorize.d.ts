declare namespace Services.Authorize {
  export interface IUser {
    uid: string;
    login: string;
    email: string;
  }

  export interface ISyncAuthorize {
    isAuthorized: boolean;
    currentUser: IUser | null;
  }

  export interface ISyncActions {
    setCurrentUser(user: IUser): void;
    clearCurrentUser(): void;
  }
}
