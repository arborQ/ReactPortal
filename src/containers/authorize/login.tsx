import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

@connect((a, b) => {
    console.log({a, b});
    return {
        login: a.login
    };
})
export default class LoginContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return <div>Login</div>
    }
}