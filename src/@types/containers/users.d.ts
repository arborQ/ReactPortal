declare namespace Containers.Users {
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

    export interface IFormField<T> {
        label: string;
        render(): JSX.Element;
        update(partial: Partial<T>): Promise<T> | void;
    }
}
