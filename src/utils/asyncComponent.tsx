import { LoadingComponent } from "bx-ui";
import * as React from "react";

export default function asyncComponent(getComponent: () => Promise<any>): any {
    return  class AsyncComponent extends React.Component<any, { component: any }> {

        constructor() {
            super();
            this.state = { component: null };
        }
        componentWillMount() {
            getComponent().then((component: any) => {
                this.setState({ component });
            });
        }

        render() {
            if (!this.state.component) {
                return <LoadingComponent></LoadingComponent>;
            }

            return <this.state.component {...this.props} />;
        }
    };
}
