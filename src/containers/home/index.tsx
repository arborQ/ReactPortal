import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps } from 'react-router';
import Header from './header';

function loadComponent(getComponent?: () => Promise<any>): any {
    return  class AsyncComponent extends React.Component<any, { component: any }> {

        constructor() {
            super();
            this.state = { component: null };
        }
        componentWillMount () {
            getComponent().then(component => {
                this.setState({ component });
            });
        }

        render() {
            if(!this.state.component) {
                return <div>Loading component...</div>;
            }

            return <this.state.component />;
        }
    }
}

export default class HomeContainer extends React.Component<any, {}> {
    render() {
        return (
        <div>
            <Header/>
            <div>
                <Switch>
                    <Route exact path='/' component={loadComponent(() => System.import('./home.component').then(module => module.default))}/>
                    <Route path='/authorize' component={loadComponent(() => System.import('../authorize').then(module => module.default))}/>
                </Switch>
            </div>
        </div>
        )
    }
}