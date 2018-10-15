import store from "bx-store";
import * as React from "react";
import { Provider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router";
import ChangePasswordContainer from "./changepassword";
import { ChangePasswordUrl, LoginUrl } from "./index";
import LoginContainer from "./login";

export default class AuthorizeContainer extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <div>
                    <Provider store={store}>
                        <Switch>
                            <Route exact path={LoginUrl} component={LoginContainer} />
                            <Route exact path={ChangePasswordUrl} component={ChangePasswordContainer} />
                        </Switch>
                    </Provider>
                </div>
            </div>
        );
    }
}
