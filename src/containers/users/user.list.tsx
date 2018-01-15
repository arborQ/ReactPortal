import {
    ButtonComponent,
    CardComponent,
} from "bx-ui";
import { ajax, StateComponent } from "bx-utils";
import { Validator } from "bx-utils";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Router, RouterProps } from "react-router";

interface ILoginDataProps {
    login: string;
}

interface ILoginState {
    login: string;
    password: string;
}

interface ILoginActionProps {
    changeLogin(login: string): void;
}

interface ILoginProps extends ILoginDataProps, ILoginActionProps, RouteComponentProps<any> {
}

@connect((store: Application.Users.IUserStoreState, b) => {
    const { users } = store;
    return {
    };
},
    (dispach: any) => {
        return {
            changeLogin(login: string) {
                dispach({ type: "change_login", login });
            },
        };
    },
)
export default class LoginContainer extends StateComponent<{}, {}> {
    render() {
        return <CardComponent title={"List of users"} subTitle={"You can see list of users"}>Users ok?</CardComponent>;
    }
}
