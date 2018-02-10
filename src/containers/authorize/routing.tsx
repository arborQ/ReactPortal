import * as React from "react";
import { Route, RouteComponentProps, Router, Switch } from "react-router";
import ChangePasswordContainer from "./changepassword";
import { ChangePasswordUrl, LoginUrl } from "./index";
import LoginContainer from "./login";

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route exact path={LoginUrl} component={LoginContainer} />
                        <Route exact path={ChangePasswordUrl} component={ChangePasswordContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}
