import * as React from "react";
import { Route, RouteComponentProps, Router, Switch } from "react-router";
import { UsersUrl } from "./";
import UserAddComponent from "./user.add";
import UserListComponent from "./user.list";

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route exact path={UsersUrl} component={UserListComponent} />
                        <Route exact path={"/users/add"} component={UserAddComponent} />
                    </Switch>
                </div>
            </div>
        );
    }
}
