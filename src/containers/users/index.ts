import { AsyncComponent } from "bx-utils";

export const UsersListComponent = AsyncComponent(async () => (await import("./routing")).default);
