import { AsyncComponent } from "bx-utils";

export const AuthorizeUrl = "/authorize";
export const LoginUrl = `${AuthorizeUrl}/login`;
export const ChangePasswordUrl = `${AuthorizeUrl}/changepassword`;
export const AuthorizeComponent = AsyncComponent(() => System.import("./routing").then((module) => module.default));
