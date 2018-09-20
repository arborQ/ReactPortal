import { ButtonComponent, CardComponent, FormComponent, HeaderComponent, InputComponent } from "bx-ui";
import { StateComponent } from "bx-utils";
import { Validator } from "bx-utils";
import * as React from "react";
import { RouteComponentProps } from "react-router";

interface IChangePasswordState {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export default class ChangePasswordContainer extends StateComponent<RouteComponentProps<any>, IChangePasswordState> {

    constructor() {
        super({ oldPassword: "", newPassword: "", confirmPassword: "" });
    }

    render() {
        return (
            <CardComponent size={400}>
                <HeaderComponent>Change password</HeaderComponent>
                <FormComponent submit={() => { /* empty */ }}>

                    <InputComponent
                        value={this.state.oldPassword}
                        isPassword={true}
                        label="Old password"
                        validator={new Validator.StringRequired()}
                        change={(oldPassword: string) => { this.updateState({ oldPassword }); }} />

                    <InputComponent
                        value={this.state.newPassword}
                        isPassword={true}
                        label="New password"
                        validator={new Validator.StringRequired()}
                        change={(newPassword: string) => { this.updateState({ newPassword }); }} />

                    <InputComponent
                        value={this.state.confirmPassword}
                        isPassword={true}
                        label="Confirm password"
                        validator={
                            new Validator.Combine([
                                new Validator.StringRequired(),
                                new Validator.StringMatch(() => this.state.newPassword)])}
                        change={(confirmPassword: string) => { this.updateState({ confirmPassword }); }} />

                    <ButtonComponent label="Save" />
                </FormComponent>
            </CardComponent>
        );
    }
}
