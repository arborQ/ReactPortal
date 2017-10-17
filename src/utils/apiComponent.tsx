import { ajax } from "bx-utils";
import * as React from "react";

export interface ILoadingProps<T> {
  loadUrl: string;
  content: (data: T) => JSX.Element;
}

export interface ILoadingState<T> {
  loading: boolean;
  error?: string;
  data: T;
}

export default class ApiComponent<S>
  extends React.Component<ILoadingProps<S>, ILoadingState<S>> {
  constructor() {
    super();
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderCantFind(message?: string) {
    return <div>Path doesn't exists</div>;
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    }

    if (!!this.state.error) {
      return this.renderCantFind();
    }

    return this.props.content(this.state.data);
  }

  componentWillMount() {
    this.setState({ loading: true, data: null, error: null });
    ajax.get<S>(this.props.loadUrl).then((data) => {
      this.setState({ loading: false, data });
    }).catch(() => {
      this.setState({ loading: false, error: "404" });
    });
  }
}
