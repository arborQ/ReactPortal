import { ajax } from "bx-utils";
import * as React from "react";

export default abstract class ApiComponent<P, S> extends React.Component<P, { loading: boolean, data: any }> {
  constructor(private loadUrl: string) {
    super();
    this.state = { loading: true, data: null };
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  abstract renderContent(data: any): JSX.Element;

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    }

    return this.renderContent(this.state.data);
  }

  componentWillMount() {
    this.setState({ loading: true, data: null });
    ajax.get(this.loadUrl).then((data) => {
      this.setState({ loading: false, data });
    });
  }
}
