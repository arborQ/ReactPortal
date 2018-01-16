import * as React from "react";
import { Provider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router";
import { UsersUrl } from "./";
import store from "./store";
import UserAddComponent from "./user.add";
import UserListComponent from "./user.list";

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <div>
                    <Provider store={store}>
                        <Switch>
                            <Route exact path={UsersUrl} component={UserListComponent} />
                            <Route exact path={`${UsersUrl}/add`} component={UserAddComponent} />
                        </Switch>
                    </Provider>
                </div>
            </div>
        );
    }
}
