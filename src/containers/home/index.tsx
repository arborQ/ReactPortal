import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps } from 'react-router';
import Header from './header';
import { LoadingComponent } from 'bx-ui';
import { AsyncComponent } from 'bx-utils';

import { AuthorizeComponent, AuthorizeUrl } from '../authorize'

export default class HomeContainer extends React.Component<any, {}> {
    render() {
        return (
        <div>
            <Header/>
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