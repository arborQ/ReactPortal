import * as React from "react";
import { Provider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router";
import { UsersUrl } from "./";
import store from "./store";
import UserListComponent from "./user.list";
import UserAddComponent from "./user.add";

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <div>
                    <Provider store={store}>
                        <Switch>
                            <Route exact path={UsersUrl} component={UserListComponent} />
                            <Route exact path={"/users/add"} component={UserAddComponent} />
                        </Switch>
                    </Provider>
                </div>
            </div>
        );
    }
}
