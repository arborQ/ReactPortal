import {
    ButtonComponent,
    CardComponent,
    FormComponent,
    HeaderComponent,
    InputComponent,
} from "bx-ui";
import { ajax, StateComponent } from "bx-utils";
import { Form, Validator } from "bx-utils";
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

        const model: Form.FormComponent<ILoginState> = {
            login: { state: this.state.login, validators: [(login) => "login"] },
            password: { state: this.state.password, validators: [(password) => "login"] },
        };

        return (
            <CardComponent size={400} title={"Log in"} subTitle={"Please provide credentials"}>
                {Form.RenderForm<ILoginState>({
                    render: this.renderForm,
                    onSubmit: (m) => { /* */ },
                    model,
                })}
            </CardComponent>
        );
    }

    private renderForm(model: Form.FormComponent<ILoginState>): JSX.Element {
        return (
            <div>
                <InputComponent
                    label={"Login" + model.login.validators}
                    value={model.login.state || ""}
                    change={(value) => { model.login.state = value; }} />
                <InputComponent
                    isPassword={true}
                    label="Password"
                    value={model.password.state || ""}
                    change={(value) => { model.password.state = value; }} />
                <ButtonComponent label="Login" />
            </div>
        );
    }
}
