import {
    ButtonComponent,
    CardComponent,
    GridComponent,
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
export default class LoginContainer extends StateComponent<{}, Application.Users.IUserStoreState> {

    private get gridSchema(): Ui.Grid.IGridSchema {
        return {
            isActive: {
                displayName: "Active?",
                getData: (data: Application.Users.IUser) => data.isActive,
                renderContent: (data: Application.Users.IUser) => (
                    <input type="checkbox" checked={data.isActive} onChange={() => { /* */ }} />
                ),
            },
            userLogin: {
                displayName: "Login",
                getData: (data: Application.Users.IUser) => data.login,
            },
            firstName: {
                displayName: "First name",
                getData: (data: Application.Users.IUser) => data.firstName,
            },
            lastName: {
                displayName: "Last name",
                getData: (data: Application.Users.IUser) => data.lastName,
            },
            email: {
                displayName: "Email",
                getData: (data: Application.Users.IUser) => (
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                ),
            },
        };
    }

    render() {

        const data: Application.Users.IUser[] = [
            { isActive: true, firstName: "Lukasz", lastName: "Wojcik", login: "arbor", email: "arbor@o2.pl" },
            { isActive: true, firstName: "Aleksandra", lastName: "Wojcik", login: "ola", email: "arbor@o3.pl" },
            { isActive: true, firstName: "Julia", lastName: "Wojcik", login: "julex", email: "arbor@o4.pl" },
        ];

        return (
            <CardComponent title={"List of users"} subTitle={"You can see list of users"}>
                <GridComponent schema={this.gridSchema} data={data} />
            </CardComponent>
        );
    }
}
