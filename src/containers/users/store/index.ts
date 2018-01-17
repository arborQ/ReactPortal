import { Assign } from "bx-utils";
import { combineReducers, createStore } from "redux";
import * as io from "socket.io-client";

const socket = io();
socket.on("connection", () => {
    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

type IUserStoreState = Application.Users.IUserStoreState;

export default createStore<IUserStoreState>(combineReducers({
    user: (s: IUserStoreState = { users: [] }, a: any): IUserStoreState => {
        return s;
    },
}));
