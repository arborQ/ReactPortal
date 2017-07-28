import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps } from 'react-router';
import { Provider } from 'react-redux';
import { CardComponent } from 'bx-ui';

import UserListComponent from './user.list';
import UserEditComponent from './user.edit';

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <CardComponent size={300} style={{ maxWidth: 500, width: '80%', margin: '0 auto' }}>
                  <Switch>
                      <Route exact path='/users/list' component={UserListComponent} />
                      <Route exact path='/users/edit/:userId' component={UserEditComponent} />
                  </Switch>
            </CardComponent>
        )
    }
}