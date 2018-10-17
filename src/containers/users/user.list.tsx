import {
    ButtonComponent,
    CardComponent,
    GridComponent,
    HorizontalLayout,
} from "bx-ui";
import { ajax, StateComponent } from "bx-utils";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export default class UserListContainer
    extends StateComponent<RouteComponentProps<{}>, Containers.Users.IUserStoreState> {

    constructor() {
        super({
            users: []
        });
    }

    private get gridSchema(): Ui.Grid.IGridSchema {
        return {
            email: {
                displayName: "Email",
                getData: (data: Containers.Users.IUser) => (
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                ),
            },
            firstName: {
                displayName: "First name",
                getData: (data: Containers.Users.IUser) => data.firstName,
            },
            isActive: {
                displayName: "Active?",
                getData: (data: Containers.Users.IUser) => data.isActive,
                renderContent: (data: Containers.Users.IUser) => (
                    <input type="checkbox" checked={data.isActive} onChange={() => { /* */ }} />
                ),
            },
            lastName: {
                displayName: "Last name",
                getData: (data: Containers.Users.IUser) => data.lastName,
            },
            userLogin: {
                displayName: "Login",
                getData: (data: Containers.Users.IUser) => data.login,
            },
        };
    }

    componentDidMount(): void {
        ajax.get("/api/account/users").then((users: Containers.Users.IUser[]) => {
            this.updateState({ users });
        });
    }

    render() {
        return (
            <CardComponent title={"List of users"} subTitle={"You can see list of users"}>
                <HorizontalLayout>
                    <ButtonComponent label="Add user" click={() => { this.props.history.push("/users/add"); }} />
                    <ButtonComponent label="Remove" click={() => { this.props.history.push("/users/add"); }} />
                </HorizontalLayout>
                <GridComponent
                    schema={this.gridSchema}
                    data={this.state.users}
                    onSelected={(users: Containers.Users.IUser[]) => {
                        /* */
                    }} />
            </CardComponent>
        );
    }
}
