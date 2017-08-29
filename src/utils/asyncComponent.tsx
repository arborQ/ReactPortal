import * as React from 'react';
import { LoadingComponent } from 'bx-ui';

export default function asyncComponent(getComponent?: () => Promise<any>): any {
    return  class AsyncComponent extends React.Component<any, { component: any }> {

        constructor() {
            super();
            this.state = { component: null };
        }
        componentWillMount () {
            getComponent().then(component => {
                this.setState({ component });
            });
        }

        render() {
            if(!this.state.component) {
                return <LoadingComponent></LoadingComponent>;
            }
            
            return <this.state.component {...this.props} />;
        }
    }
}