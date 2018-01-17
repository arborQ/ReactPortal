import {
    AnchorComponent,
    ButtonComponent,
    CardComponent,
    GridComponent,
    InputComponent,
} from "bx-ui";
import { ajax, StateComponent } from "bx-utils";
import { Validator } from "bx-utils";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Router, RouterProps } from "react-router";

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
export default class UserAddContainer extends StateComponent<{}, Application.Users.IUser> {

    addSchema: { [key: string]: string } = {
        firstName: "",
    };

    render() {

        return (
            <CardComponent title={"Add user"} subTitle={"Fill data to add new user"}>
                <InputComponent name="login" label="Login" value={this.state.login}
                    change={(login) => {
                        this.updateState({ login });
                    }} />
                <InputComponent name="firstName" label="First name" value={this.state.firstName}
                    change={(firstName) => {
                        this.updateState({ firstName });
                    }} />
                <InputComponent name="lastName" label="Last name" value={this.state.lastName}
                    change={(lastName) => {
                        this.updateState({ lastName });
                    }} />
                <InputComponent name="email" label="Email" value={this.state.email}
                    change={(email) => {
                        this.updateState({ email });
                    }} />
                <ButtonComponent label="Save" />
                <AnchorComponent href="/users">{"Cancel"}</AnchorComponent>
            </CardComponent>
        );
    }
}
