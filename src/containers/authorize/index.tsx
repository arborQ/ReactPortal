import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps } from 'react-router';
import { Provider } from 'react-redux';
import LoginContainer from './login';
import ChangePasswordContainer from './changepassword';
import store from './store';

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <div>Authorize</div>
                <div>
                    <Provider store={store}>
                        <Switch>
                            <Route exact path='/authorize/login' component={LoginContainer} />
                            <Route exact path='/authorize/changepassword' component={ChangePasswordContainer} />
                        </Switch>
                    </Provider>
                </div>
            </div>
        )
    }
}