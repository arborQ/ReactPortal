import { AsyncComponent } from "bx-utils";

export const AuthorizeComponent = AsyncComponent(async () => (await import("./routing")).default);
