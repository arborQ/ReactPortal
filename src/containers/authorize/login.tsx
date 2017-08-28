import * as React from 'react';
import { RouteComponentProps, Router, RouterProps } from 'react-router';
import { connect } from 'react-redux';
import { IAuthorizeLoginState } from './store';
import { ajax } from 'bx-utils';
import { InputComponent, ButtonComponent, CardComponent, FormComponent} from 'bx-ui';

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

@connect((a, b) => {
    let { login } = a;
    return {
        login: login.login,
    };
},
    dispach => {
        return {
            changeLogin(login: string) {
                dispach({ type: 'change_login', login });
            }
        }
    }
)
export default class LoginContainer extends React.Component<ILoginProps, ILoginState> {
    constructor() {
        super();
        this.state = { login: '', password: '' };
    }
    
    componentDidMount() {
        if (!!this.props.login) {
            this.props.history.push('/users/list');
        } else {
            this.setState(Object.assign({}, this.state, { login: this.props.login || '', password: '' }));
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
            this.props.history.push('/users/list');
        });
    }

    render() {
        return (
            <CardComponent size={400}>
                <FormComponent submit={this.submit.bind(this)}>
                    <InputComponent value={this.state.login} label="Login" change={login => { this.updateState({ login }) }} />
                    <InputComponent value={this.state.password} isPassword={true} label="Password" change={password => { this.updateState({ password }) }} />
                    <ButtonComponent label="Save" />
                </FormComponent>
            </CardComponent>
        );
    }
}
