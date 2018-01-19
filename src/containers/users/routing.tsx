import * as React from "react";
import { Provider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router";
import { UsersUrl } from "./";
import store from "./store";
import UserListComponent from "./user.list";

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <div>
                    <Provider store={store}>
                        <Switch>
                            <Route path={UsersUrl} component={UserListComponent} />
                        </Switch>
                    </Provider>
                </div>
            </div>
        );
    }
}
