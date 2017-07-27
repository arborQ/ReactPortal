import * as React from 'react';
import LoadingComponent from '../loader';

interface IFormProps extends React.HTMLProps<any> {
  submit: () => Promise<any> | void;
  loadingMessage?: string;
}

export default class FormComponent extends React.Component<IFormProps , { isLoading: boolean }> {
  constructor() {
    super();
    this.state = { isLoading: false };
  }

  submitAction($event: React.FormEvent<HTMLFormElement>) {
    $event.stopPropagation();
    $event.preventDefault();

    this.setState(Object.assign({}, this.state, { isLoading: true }));

    Promise.resolve(this.props.submit()).then(() => {
      this.setState(Object.assign({}, this.state, { isLoading: false }));
    }).catch(() => {
      this.setState(Object.assign({}, this.state, { isLoading: false }));
    });
  }

  render() {
      return (
      <form onSubmit={this.submitAction.bind(this)}>
        { this.state.isLoading ? <div>{ this.props.loadingMessage ? this.props.loadingMessage: <LoadingComponent></LoadingComponent> }</div> : this.props.children }
      </form>);
  }
}