import * as React from 'react';
import { Router, Route, Switch, RouteComponentProps } from 'react-router';
import HomeComponent from './home.component';
import AuthorizeComponent from '../authorize';
import Header from './header';


export default class HomeContainer extends React.Component<any, {}> {
    render() {
        return (
        <div>
            <Header/>
            <div>
                <Switch>
                    <Route exact path='/' component={HomeComponent}/>
                    <Route path='/authorize' component={AuthorizeComponent}/>
                </Switch>
            </div>
        </div>
        )
    }
}