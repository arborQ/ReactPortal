import {
    ButtonComponent,
    CardComponent,
    FormComponent,
    HeaderComponent,
    InputComponent,
} from "bx-ui";
import { ajax } from "bx-utils";
import { Validator } from "bx-utils";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Router, RouterProps } from "react-router";
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
export default class LoginContainer extends React.Component<ILoginProps, ILoginState> {
    constructor() {
        super();
        this.state = { login: "", password: "" };
    }

    componentDidMount() {
        if (!!this.props.login) {
            this.props.history.push("/users/list");
        } else {
            this.setState(Object.assign({}, this.state, { login: this.props.login || "", password: "" }));
        }
    }

    updateState(state: any) {
        this.setState(Object.assign({}, this.state, state));
    }

    submit($event: React.FormEvent<HTMLFormElement>): Promise<any> {
        return ajax
            .post("/api/authentication/login", { login: this.state.login, password: this.state.password })
            .then((res: any) => {
                this.props.changeLogin(res.user);
                this.props.history.push("/users/list");
            });
    }

    render() {

        const fieldValidator = new Validator.Combine([
            new Validator.StringRequired(),
            new Validator.StringLength(1, 50),
        ]);

        const matchValidator = new Validator.Combine([
            new Validator.StringRequired(),
            new Validator.StringLength(10),
            new Validator.StringMatch(() => this.state.login),
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
            <CardComponent size={400}>
                <HeaderComponent>Log in</HeaderComponent>
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
