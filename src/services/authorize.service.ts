
import { ajax } from "bx-utils";

export default class AuthorizeService {
    login(login: string, password: string): Promise<void> {
        return Promise.resolve();
    }

    logout(): Promise<void> {
        return Promise.resolve();
    }

    statusChanged(action: (currentUser: Services.Authorize.IUser | null) => void): void {
       /* */
    }
}
