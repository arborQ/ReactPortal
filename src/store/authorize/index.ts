export const jwtTokenKey: string = "jwt.token";

const defaultState: Stores.IAuthorizeStoreState = {
  isAuthorized: false,
  user: null
};

function parseJwt<T>(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");

  return JSON.parse(window.atob(base64)) as T;
}

function parseJwtToUser(token: string): Stores.Authorize.IUser {
  const obj = parseJwt<any>(token);

  const data: Stores.Authorize.IUser = {
    id: +obj.Id,
    email: obj.Email,
    fullName: obj.FullName,
    login: obj.Login
  };

  return data;
}
const storageJwtKey = localStorage.getItem(jwtTokenKey);
if (storageJwtKey !== null) {
  const currentUser = parseJwtToUser(storageJwtKey);
  defaultState.isAuthorized = true;
  defaultState.user = currentUser;
}

export const authorizeReducer: Stores.StoreReducer<
  Stores.IAuthorizeStoreState
> = (state = defaultState, action) => {
  switch (action.type) {
    case "login_token":
      const data = parseJwtToUser(action.data);
      localStorage.setItem(jwtTokenKey, action.data);

      return {
        ...state,
        ...{ isAuthorized: action.data !== null, user: data }
      };
    case "change_login":
      return {
        ...state,
        ...{ isAuthorized: action.data !== null, user: action.data }
      };
    case "clear_login":
      localStorage.removeItem(jwtTokenKey);

      return {
        ...state,
        ...{ isAuthorized: false, user: null }
      };
  }

  return state;
};
