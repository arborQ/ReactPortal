declare namespace Stores.Authorize {
    export interface IAuthorizeUser {
        login: string | null;
        authorizedOn?: Date;
    }
    
    export interface IAuthorizeStoreState {
        user: IAuthorizeUser;
    }
}
