import { authorizeService } from "bx-services";
import {
    ButtonComponent,
    CardComponent,
    FormComponent,
    HeaderComponent,
    InputComponent,
} from "bx-ui";
import { ajax, StateComponent } from "bx-utils";
import { Validator } from "bx-utils";
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
        return authorizeService.login(this.state.login, this.state.password)
             .then((res: any) => {
                this.props.history.push("/users/list");
            });
    }

    private fieldValidator = new Validator.Combine([
        new Validator.StringRequired(),
        new Validator.StringLength(1),
    ]);

    private matchValidator = new Validator.Combine([
        new Validator.StringRequired(),
        new Validator.StringLength(1),
    ]);

    private inputForm: Utils.Common.IRemapModel<ILoginState, Ui.Input.IProps> = {
        login: {
            change: (login: string) => { this.updateState({ login }); },
            label: "Login",
            name: "login",
            validator: this.fieldValidator,
            value: "test"
        },
        password: {
            change: (password: string) => { this.updateState({ password }); },
            isPassword: true,
            label: "Password",
            name: "password",
            validator: this.matchValidator,
        }
    }

    render() {
        return (
            <CardComponent size={400} title={"Log in"} subTitle={"Please provide credentials"}>
                <FormComponent submit={this.submit.bind(this)}>
                    <InputComponent value={this.state.login}  {...this.inputForm.login} />
                    <InputComponent {...this.inputForm.password} value={this.state.password} />
                    <ButtonComponent label="Save" />
                </FormComponent>
            </CardComponent>
        );
    }
}
