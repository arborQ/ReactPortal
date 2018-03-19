import { AsyncComponent } from "bx-utils";

export const UsersUrl = "/users";
export const UsersListComponent = AsyncComponent(() => import("./routing").then((module) => module.default));
