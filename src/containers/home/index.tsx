import { LoadingComponent } from "bx-ui";
import { AsyncComponent } from "bx-utils";
import * as React from "react";
import { Route, RouteComponentProps, Router, Switch, withRouter } from "react-router";
import * as X from "react-router-dom";
import ScrollComponent from "../scroll";
import Header from "./header";

import { AuthorizeComponent, AuthorizeUrl } from "../authorize";

import IndexComponent from "../indexComponent";

class HomeContainer extends React.Component<RouteComponentProps<any> | any, {}> {
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>
                    <Switch>
                        <Route exact
                            path="/"
                            component={AsyncComponent(
                                () => System.import("./home.component").then((module) => module.default))}
                        />
                        <Route path={AuthorizeUrl} component={AuthorizeComponent} />
                        <Route path="/scroll" component={ScrollComponent} />
                        <Route component={IndexComponent} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeContainer);
