import {
    ButtonComponent,
    CardComponent,
    FormComponent,
    HeaderComponent,
    InputComponent,
} from "bx-ui";
import { ajax, StateComponent } from "bx-utils";
import { Validator } from "bx-utils";
import * as firebase from "firebase/app";
import "firebase/auth";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Router, RouterProps } from "react-router";
import { createFormElement } from "./form";
import { IAuthorizeStoreState } from "./store";

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

firebase.initializeApp({}, "reactportal");

@connect((store: IAuthorizeStoreState, b) => {
    const { user } = store;
    return {
        login: user.login,
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
export default class LoginContainer extends StateComponent<ILoginProps, ILoginState> {

    private form = createFormElement<ILoginState>(this.state, (m) => m);
    constructor() {
        super({ login: "", password: "" });
    }

    componentDidMount() {
        if (!!this.props.login) {
            this.props.history.push("/users/list");
        } else {
            this.updateState({ login: this.props.login || "", password: "" });
        }
    }

    submit($event: React.FormEvent<HTMLFormElement>): Promise<any> {
        return firebase.auth()
            .signInWithEmailAndPassword(this.state.login, this.state.password)
            .then((result) => {
                /* */
            }).catch(() => {
                alert("error");
            });
    }

    render(): JSX.Element {
        const fieldValidator = new Validator.Combine([
            new Validator.StringRequired(),
            new Validator.StringLength(1),
        ]);

        const matchValidator = new Validator.Combine([
            new Validator.StringRequired(),
            new Validator.StringLength(1),
        ]);

        const inputs: Ui.Input.IProps[] = [
            {
                change: (login: string) => { this.updateState({ login }); },
                label: "Login",
                name: "login",
                validator: fieldValidator,
                value: this.state.login,
            },
            {
                change: (password: string) => { this.updateState({ password }); },
                isPassword: true,
                label: "Password",
                name: "password",
                validator: matchValidator,
                value: this.state.password,
            },
        ];

        return (
            <CardComponent size={400} title={"Log in"} subTitle={"Please provide credentials"}>
                <FormComponent submit={this.submit.bind(this)}>
                    {
                        inputs.map((input: Ui.Input.IProps, i: number) => <InputComponent key={i} {...input} />)
                    }
                    <ButtonComponent label="Save" />
                </FormComponent>
            </CardComponent>
        );
    }
}
