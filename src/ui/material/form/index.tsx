import { Always, Debounce } from "bx-utils";
import * as React from "react";
import LoadingComponent from "../loader";
import { Form } from "./form.elements";

interface IFormProps extends React.HTMLProps<any> {
  delay?: number;
  submit: () => Promise<any> | void;
  loadingMessage?: string;
}

export default class FormComponent extends React.Component<
  IFormProps,
  { isLoading: boolean }
> {
  constructor() {
    super();
    this.state = { isLoading: false };
  }

  submitAction($event: React.FormEvent<HTMLFormElement>) {
    $event.stopPropagation();
    $event.preventDefault();

    const debounce = Debounce<boolean>(isLoading => {
      this.setState(Object.assign({}, this.state, { isLoading }));
    }, this.props.delay || 100);

    debounce(true);

    Always(Promise.resolve(this.props.submit())).then(() => {
      debounce(false);
    });
  }

  render() {
    return (
      <Form
        loading={this.state.isLoading}
        onSubmit={this.submitAction.bind(this)}
      >
        {this.state.isLoading ? (
          <div className="loading">
            <LoadingComponent />
          </div>
        ) : null}
        <div className="content">{this.props.children}</div>
      </Form>
    );
  }
}
