import { ajax } from "bx-utils";
import { connect } from "react-redux";

export default class AuthorizeService {
  connect(): ClassDecorator {
    return connect(
      (store: Stores.IGlobalStore): Services.Authorize.ISyncAuthorize => {
        return {
          isAuthorized: false,
          currentUser: null
        };
      },
      (): Services.Authorize.ISyncActions => {
        return {
          setCurrentUser(user: Services.Authorize.IUser): void {
            /* */
          },
          clearCurrentUser(): void {
            /* */
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

  login(login: string, password: string): Promise<void> {
    return ajax
      .post<string>("/api/account/authorize", { login, password })
      .then(token => {
        const obj = this.parseJwt(token);

        return Promise.resolve();
      });
  }

  logout(): Promise<void> {
    return ajax.remove("/api/account/authorize");
  }

  setCurrentUser(user: Services.Authorize.IUser): void {
    localStorage.setItem("bx-storage-user", JSON.stringify(user));
  }

  clearCurrentUser(): void {
    localStorage.removeItem("bx-storage-user");
  }

  getCurrentUser(): Services.Authorize.IUser | null {
    const key = localStorage.getItem("bx-storage-user");
    if (key === null) {
      return null;
    }

    return JSON.parse(key) as Services.Authorize.IUser;
  }

  private parseJwt<T>(token: string) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");

    return JSON.parse(window.atob(base64)) as T;
  }
}
