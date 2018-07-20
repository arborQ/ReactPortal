import { LoadingComponent } from "bx-ui";
import { AsyncComponent } from "bx-utils";
import * as React from "react";
import { Route, RouteComponentProps, Router, Switch, withRouter } from "react-router";
import * as X from "react-router-dom";
import Header from "./header";

import { authorizeService } from "bx-services";
import { AuthorizeComponent, AuthorizeUrl } from "../authorize";
import { UsersListComponent, UsersUrl } from "../users";

import IndexComponent from "../indexComponent";

class HomeContainer extends React.Component<RouteComponentProps<any> | any, {}> {
    render() {
        return (
            <div>
                <Header {...(this.props as any)} />
                <div style={{ paddingTop: 10 }}>
                    <Switch>
                        <Route exact
                            path="/"
                            component={AsyncComponent(async () => (await System.import("./home.component")).default)}
                        />
                        <Route path={AuthorizeUrl} component={AuthorizeComponent} />
                        <Route path={UsersUrl} component={UsersListComponent} />
                        <Route component={IndexComponent} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeContainer);