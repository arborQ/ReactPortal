import {
    CardComponent,
    GridComponent,
} from "bx-ui";
import { StateComponent } from "bx-utils";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export default class UserListContainer
    extends StateComponent<RouteComponentProps<{}>, Containers.Users.IUserStoreState> {

    private get gridSchema(): Ui.Grid.IGridSchema {
        return {
            isActive: {
                displayName: "Active?",
                getData: (data: Containers.Users.IUser) => data.isActive,
                renderContent: (data: Containers.Users.IUser) => (
                    <input type="checkbox" checked={data.isActive} onChange={() => { /* */ }} />
                ),
            },
            userLogin: {
                displayName: "Login",
                getData: (data: Containers.Users.IUser) => data.login,
            },
            firstName: {
                displayName: "First name",
                getData: (data: Containers.Users.IUser) => data.firstName,
            },
            lastName: {
                displayName: "Last name",
                getData: (data: Containers.Users.IUser) => data.lastName,
            },
            email: {
                displayName: "Email",
                getData: (data: Containers.Users.IUser) => (
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                ),
            },
        };
    }

    componentWillMount() {
        /* */
    }

    render() {
        const data: Containers.Users.IUser[] = [
            { isActive: true, firstName: "Lukasz", lastName: "Wojcik", login: "arbor", email: "arbor@o2.pl" },
            { isActive: true, firstName: "Aleksandra", lastName: "Wojcik", login: "ola", email: "arbor@o3.pl" },
            { isActive: true, firstName: "Julia", lastName: "Wojcik", login: "julex", email: "arbor@o4.pl" },
        ];

        return (
            <CardComponent title={"List of users"} subTitle={"You can see list of users"}>
                <div>
                    <Link to="/users/add">Add user</Link>
                </div>
                <GridComponent
                    schema={this.gridSchema}
                    data={data}
                    onSelected={(users: Containers.Users.IUser[]) => {
                        /* */
                    }} />
            </CardComponent>
        );
    }
}
