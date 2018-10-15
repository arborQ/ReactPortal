import { combineReducers, createStore, ReducersMapObject } from "redux";
import { authorizeReducer as authorize } from "./authorize";

export default createStore<Stores.IGlobalStore>(
  combineReducers({
    authorize
  })
);
