import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps } from 'react-router';
import { Provider } from 'react-redux';
import LoginContainer from './login';
import ChangePasswordContainer from './changepassword';
import store from './store';

import { LoginUrl, ChangePasswordUrl } from './index';

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <div>Authorize</div>
                <div>
                    <Provider store={store}>
                        <Switch>
                            <Route exact path={LoginUrl} component={LoginContainer} />
                            <Route exact path={ChangePasswordUrl} component={ChangePasswordContainer} />
                        </Switch>
                    </Provider>
                </div>
            </div>
        )
    }
}