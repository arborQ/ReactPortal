declare namespace Application.Users {
    export interface IUserStoreState {
        users: IUser[];
    }

    export interface IUser {
        _id?: number;
        isActive: boolean;
        login: string;
        firstName: string;
        lastName: string;
        email: string;
    }
}
