import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps } from 'react-router';
import LoginContainer from './login';
import ChangePasswordContainer from './changepassword';

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
        <div>
            <div>Authorize</div>
            <div>
               <Switch>
                    <Route exact path='/authorize/login' component={LoginContainer}/>
                    <Route exact path='/authorize/changepassword' component={ChangePasswordContainer}/>
                </Switch>
            </div>
        </div>
        )
    }
}