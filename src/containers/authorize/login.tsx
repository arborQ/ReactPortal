import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { IAuthorizeLoginState } from './store';

import { InputComponent, ButtonComponent, CardComponent, FormComponent} from 'bx-ui';

interface ILoginDataProps {
    login: string;
    password: string;
}

interface ILoginActionProps {
    changeLogin(login: string): void;
    changePassword(password: string): void;
}

interface ILoginProps extends ILoginDataProps, ILoginActionProps, RouteComponentProps<any> {
}

@connect((a, b) => {
    let { login } = a;
    return {
        login: login.login,
        password: login.password
    };
},
    dispach => {
        return {
            changeLogin(login: string) {
                dispach({ type: 'change_login', login });
            },
            changePassword(password: string) {
                dispach({ type: 'change_password', password });
            }
        }
    }
)
export default class LoginContainer extends React.Component<ILoginProps, ILoginDataProps> {
    constructor() {
        super();
        this.state = { login: '', password: '' };
    }
    componentDidMount() {
        this.setState(Object.assign({}, this.state, { login: this.props.login, password: this.props.password }))
    }

    updateState(state: any) {
        this.setState(Object.assign({}, this.state, state));
    }

    render() {
        return (
            <CardComponent style={ { margin: '0 auto', maxWidth: "500px" } }>
                <FormComponent submit={() => new Promise((r) => { setTimeout(() => { r(); }, 1000) })}>
                    <InputComponent value={this.state.login} label="Login" change={login => { this.updateState({ login }) }} />
                    <InputComponent value={this.state.password} isPassword={true} label="Password" change={password => { this.updateState({ password }) }} />
                    <ButtonComponent label="Save" />
                </FormComponent>
            </CardComponent>
        );
    }
}
