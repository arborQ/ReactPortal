import { ButtonComponent, CardComponent, GridComponent } from "bx-ui";
import { ApiComponent } from "bx-utils";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

interface IIndexState {
  apiUrl: string;
}

export default class IndexComponent<P> extends React.Component<RouteComponentProps<P>, IIndexState> {
  componentWillMount() {
    this.updateState(this.props);
  }
  componentWillReceiveProps(props: RouteComponentProps<P>) {
    this.updateState(props);
  }

  shouldComponentUpdate(nextProps, nextState: IIndexState) {
    return this.state.apiUrl !== nextState.apiUrl;
  }

  render() {
    return (
      <CardComponent size={300} style={{ maxWidth: 800, width: "80%", margin: "0 auto" }}>
        <ApiComponent
          loadUrl={this.state.apiUrl}
          content={(data: any) =>
            <div>
              <ButtonComponent
                label={"Add new"}
                click={() => {
                  this.props.history.push(`${this.state.apiUrl}/add`);
                }} />
              <Link to={`${this.props.location.pathname}/add`}>Add</Link>
              <GridComponent schema={data.schema} model={data.data} />
            </div>
          } />
      </CardComponent>
    );
  }

  private updateState(props: RouteComponentProps<P>) {
    this.setState({ apiUrl: `/api${props.location.pathname}` });
  }
}
