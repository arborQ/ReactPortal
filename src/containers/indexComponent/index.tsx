import { GridComponent } from "bx-ui";
import { ApiComponent } from "bx-utils";
import * as React from "react";
import { RouteComponentProps } from "react-router";

export default class IndexComponent<P> extends React.Component<RouteComponentProps<P>, any> {
    render() {
        return (
          <ApiComponent
            loadUrl={ `/api${this.props.location.pathname}` }
            content={(data: any[]) =>
              <GridComponent>{data.length}</GridComponent>
            } />);
      }
}
