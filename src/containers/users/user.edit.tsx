import * as React from 'react';

export default class UserEditComponent extends React.Component<any, any> {
  render() {
    return <div>user edit {this.props.match.params.userId}</div>;
  }
}