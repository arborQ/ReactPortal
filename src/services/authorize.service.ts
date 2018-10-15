import { ajax } from "bx-utils";
import { connect } from "react-redux";

export default class AuthorizeService {
  static parseJwt<T>(token: string) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");

    return JSON.parse(window.atob(base64)) as T;
  }

  connect(): ClassDecorator {
    return connect(
      (store: Stores.IGlobalStore): Services.Authorize.ISyncAuthorize => {
        return {
          isAuthorized: store.authorize.isAuthorized,
          currentUser: store.authorize.user
        };
      },
      (dispach): Services.Authorize.ISyncActions => {
        return {
          setCurrentUser(token: string): void {
            const obj = AuthorizeService.parseJwt<any>(token);

            const data: Stores.Authorize.IUser = {
              id: +obj.Id,
              email: obj.Email,
              fullName: obj.FullName,
              login: obj.Login
            };

            dispach({ type: "change_login", data });
          },
          clearCurrentUser(): void {
            dispach({ type: "clear_login" });
          }
        };
      }
    );
  }

  isAuthorized(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      ajax
        .get("/api/account/authorize")
        .then(() => resolve(true))
        .catch(() => resolve(false));
    });
  }

  login(login: string, password: string): Promise<string> {
    return ajax.post<string>("/api/account/authorize", { login, password });
  }

  logout(): Promise<void> {
    return ajax.remove("/api/account/authorize");
  }

  setCurrentUser(user: Stores.Authorize.IUser): void {
    localStorage.setItem("bx-storage-user", JSON.stringify(user));
  }

  clearCurrentUser(): void {
    localStorage.removeItem("bx-storage-user");
  }

  getCurrentUser(): Stores.Authorize.IUser | null {
    const key = localStorage.getItem("bx-storage-user");
    if (key === null) {
      return null;
    }

    return JSON.parse(key) as Stores.Authorize.IUser;
  }
}
