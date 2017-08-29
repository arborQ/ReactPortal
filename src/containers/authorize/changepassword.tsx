import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { InputComponent, ButtonComponent, CardComponent, FormComponent, HeaderComponent} from 'bx-ui';

interface IChangePasswordState {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export default class ChangePasswordContainer extends React.Component<RouteComponentProps<any>, IChangePasswordState> {

    constructor(){
        super();
        this.state = { oldPassword: '', newPassword: '', confirmPassword: '' };
    }

    updateState(state: any) {
        this.setState(Object.assign({}, this.state, state));
    }

    render() {
        return (
            <CardComponent size={400}>
                <HeaderComponent>Change password</HeaderComponent>
                <FormComponent submit={() => {}}>
                    <InputComponent value={this.state.oldPassword} isPassword={true} label="Old password" change={oldPassword => { this.updateState({ oldPassword }) }} />
                    <InputComponent value={this.state.newPassword} isPassword={true} label="New password" change={newPassword => { this.updateState({ newPassword }) }} />
                    <InputComponent value={this.state.confirmPassword} isPassword={true} label="Confirm password" change={confirmPassword => { this.updateState({ confirmPassword }) }} />
                    <ButtonComponent label="Save" />
                </FormComponent>
            </CardComponent>
        );
    }
}