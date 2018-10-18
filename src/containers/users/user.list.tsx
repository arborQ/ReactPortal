import {
	AvatarComponent,
	ButtonComponent,
	CardComponent,
	GridComponent,
	HorizontalLayout
} from "bx-ui";
import { ajax, StateComponent } from "bx-utils";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

@connect((store: Stores.IGlobalStore) => {
	if (store.authorize.user === null) {
		throw new Error("Screen available only for logged in users.");
	}
	return {
		currentUser: store.authorize.user
	};
})
export default class UserListContainer extends StateComponent<
	RouteComponentProps<{}> & { currentUser: Stores.Authorize.IUser },
	Containers.Users.IUserStoreState
> {
	constructor() {
		super({
			selectedIds: [],
			users: []
		});
	}

	private get gridSchema(): Ui.Grid.IGridSchema {
		return {
			avatar: {
				displayName: "Avatar",
				getData: (data: Containers.Users.IUser) => (
					<AvatarComponent email={data.email} />
				)
			},
			email: {
				displayName: "Email",
				getData: (data: Containers.Users.IUser) => (
					<a href={`mailto:${data.email}`}>{data.email}</a>
				)
			},
			firstName: {
				displayName: "First name",
				getData: (data: Containers.Users.IUser) => data.firstName
			},
			isActive: {
				displayName: "Active?",
				getData: (data: Containers.Users.IUser) => data.isActive,
				renderContent: (data: Containers.Users.IUser) => (
					<span>{data.isActive ? "yes" : "no"}</span>
				)
			},
			lastName: {
				displayName: "Last name",
				getData: (data: Containers.Users.IUser) => data.lastName
			},
			userLogin: {
				displayName: "Login",
				getData: (data: Containers.Users.IUser) => data.login
			}
		};
	}

	componentDidMount(): void {
		ajax.get("/api/account/users").then((users: Containers.Users.IUser[]) => {
			this.updateState({ users, selectedIds: [] });
		});
	}

	render() {
		return (
			<CardComponent
				size={800}
				title={"List of users"}
				subTitle={"You can see list of users"}
			>
				<HorizontalLayout>
					<ButtonComponent
						label="Add user"
						click={() => {
							this.props.history.push("/users/add");
						}}
					/>
					<ButtonComponent
						label="Edit user"
						disabled={this.state.selectedIds.length !== 1}
						click={() => {
							const [selectedId] = this.state.selectedIds;
							this.props.history.push(`/users/edit/${selectedId}`);
						}}
					/>
					<ButtonComponent
						label={
							this.state.selectedIds.indexOf(this.props.currentUser.id) !== -1
								? "Remove: forbiden"
								: "Remove"
						}
						disabled={
							this.state.selectedIds.length === 0 ||
							this.state.selectedIds.indexOf(this.props.currentUser.id) !== -1
						}
						click={() => {
							this.removeSelected();
						}}
					/>
					<ButtonComponent
						label="Refresh"
						click={() => {
							this.componentDidMount();
						}}
					/>
				</HorizontalLayout>
				<GridComponent
					schema={this.gridSchema}
					data={this.state.users}
					onSelected={(users: Containers.Users.IUser[]) => {
						this.updateState({
							selectedIds: users.map(u => u.id || 0)
						});
					}}
				/>
			</CardComponent>
		);
	}

	private removeSelected(): void {
		ajax
			.remove("/api/account/users", { Ids: this.state.selectedIds })
			.then((ids: number[]) => {
				this.updateState({
					selectedIds: [],
					users: [
						...this.state.users.filter(u => ids.indexOf(u.id || 0) === -1)
					]
				});
			});
	}
}
