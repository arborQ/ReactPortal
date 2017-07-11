import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { IAuthorizeLoginState } from './store';

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

    render() {
        return (
            <div>
                <input type="text" value={this.state.login} onChange={e => { this.props.changeLogin(e.target.value) }} />
                <input type="password" value={this.state.password} onChange={e => { this.props.changePassword(e.target.value) }} />
            </div>
        );
    }
}
