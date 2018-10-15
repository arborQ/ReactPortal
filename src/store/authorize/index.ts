const defaultState: Stores.IAuthorizeStoreState = {
  isAuthorized: false,
  user: null
};

export const authorizeReducer: Stores.StoreReducer<
  Stores.IAuthorizeStoreState
> = (state = defaultState, action) => {
  switch (action.type) {
    case "change_login":
      return {
        ...state,
        ...{ isAuthorized: action.data !== null, user: action.data }
      };
    case "clear_login":
      return {
        ...state,
        ...{ isAuthorized: false, user: null }
      };
  }

  return state;
};
