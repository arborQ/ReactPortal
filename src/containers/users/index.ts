import { AsyncComponent } from "bx-utils";

export const UsersUrl = "/users";
export const UsersListComponent = AsyncComponent(async () => (await System.import("./routing")).default);
