import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { IAuthorizeLoginState } from './store';

interface ILoginProps extends RouteComponentProps<any> {
    login: string;
    password: string;

    changeLogin(login: string): void;
    changePassword(password: string): void;
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
export default class LoginContainer extends React.Component<ILoginProps, {}> {
    render() {
        return (
            <div>
                <input type="text" value={this.props.login} onChange={e => { this.props.changeLogin(e.target.value) }} />
                <input type="password" value={this.props.password} onChange={e => { this.props.changePassword(e.target.value) }} />
            </div>
        );
    }
}
