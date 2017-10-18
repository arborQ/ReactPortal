import { CardComponent, GridComponent } from "bx-ui";
import { ApiComponent } from "bx-utils";
import * as React from "react";
import { RouteComponentProps } from "react-router";

export default class IndexComponent<P> extends React.Component<RouteComponentProps<P>, any> {
  render() {
    return (
      <CardComponent size={300} style={{ maxWidth: 800, width: "80%", margin: "0 auto" }}>
        <ApiComponent
          loadUrl={`/api${this.props.location.pathname}`}
          content={(data: any) =>
            <GridComponent schema={data.schema} model={data.data} />
          } />
      </CardComponent>
    );
  }
}
