import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps, withRouter } from 'react-router';
import Header from './header';
import { LoadingComponent } from 'bx-ui';
import { AsyncComponent } from 'bx-utils';

import { AuthorizeComponent, AuthorizeUrl } from '../authorize'

class HomeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
        <div>
            <Header {...this.props}/>
            <div>
                <Switch>
                    <Route exact path='/' component={AsyncComponent(() => System.import('./home.component').then(module => module.default))}/>
                    <Route path={AuthorizeUrl} component={AuthorizeComponent}/>
                    <Route path='/users' component={AsyncComponent(() => System.import('../users').then(module => module.default))}/>
                </Switch>
            </div>
        </div>
        )
    }
}

export default withRouter(HomeContainer);