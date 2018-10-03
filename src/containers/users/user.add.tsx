import {
    AnchorComponent,
    ButtonComponent,
    CardComponent,
    DialogComponent,
    GridComponent,
    InputComponent,
} from "bx-ui";
import { ajax, StateComponent, Validator } from "bx-utils";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Router, RouterProps } from "react-router";

@connect((store: Containers.Users.IUserStoreState, b) => {
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
export default class UserAddContainer extends StateComponent<RouteComponentProps<{}>, Containers.Users.IUser> {

    addSchema: { [key: string]: string } = {
        firstName: "",
    };

    dialog: Ui.Dialog.IModelDialog | null = null;

    addUser(): Promise<number> {
        return ajax.post("/api/users", {
            login: this.state.login,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        });
    }

    render() {

        const inputFields: Ui.Input.IProps[] = [
            {
                name: "login",
                label: "Login",
                value: this.state.login,
                change: (login) => this.updateState({ login }),
                validator: new Validator.StringRequired(),
            },
            {
                name: "firstName",
                label: "firstName",
                value: this.state.firstName,
                change: (firstName) => this.updateState({ firstName }),
                validator: new Validator.StringRequired(),
            },
            {
                name: "lastName",
                label: "lastName",
                value: this.state.lastName,
                change: (lastName) => this.updateState({ lastName }),
                validator: new Validator.StringRequired(),
            },
            {
                name: "email",
                label: "email",
                value: this.state.email,
                change: (email) => this.updateState({ email }),
                validator: new Validator.StringRequired(),
            },
        ];

        return (
            <DialogComponent
                title={"Add new user"}
                ref={(dialog: Ui.Dialog.IModelDialog | null) => {
                    if (dialog != null) {
                        dialog.open().then(() => {
                            this.props.history.goBack();
                        });
                    }
                }}>
                { inputFields.map((field) => <InputComponent key={field.name} {...field} />) }
                <ButtonComponent label="Save" click={this.addUser.bind(this)} />
                <AnchorComponent href="/users">{"Cancel"}</AnchorComponent>
            </DialogComponent>
        );
    }
}
