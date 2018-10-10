
import { ajax } from "bx-utils";

export default class AuthorizeService {
    isAuthorized(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            ajax.get("/api/account/authorize")
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }

    login(login: string, password: string): Promise<void> {
        return ajax.post("/api/account/authorize", { login, password });
    }

    logout(): Promise<void> {
        return ajax.remove("/api/account/authorize");
    }
}
