import { Styles } from "bx-ui";
import { StateComponent } from "bx-utils";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";

import { authorizeService } from "bx-services";
import { Link, NavLink } from "react-router-dom";

const ChangePasswordUrl = "/authorize/changepassword";
const LoginUrl = "/authorize/login";

const Header = styled.header`
	background-color: ${Styles.colors.main};
	width: 100%;
	height: 50px;
	line-height: 50px;
	padding: 0 10px;
	font-size: 1em;

	a {
		padding: 0 10px;
		text-decoration: none;
		color: ${Styles.colors.second};

		&.active {
			color: #fff;
		}
	}
`;

interface IHeaderState extends Services.Authorize.ISyncAuthorize {
	isAuthorized: boolean;
}

export interface IHeaderProps
	extends RouteComponentProps<any>,
		IHeaderState,
		Services.Authorize.ISyncActions,
		Services.Authorize.ISyncAuthorize {}

@authorizeService.connect()
class HeaderComponent extends StateComponent<
	IHeaderProps,
	{ isAuthorized: boolean }
> {
	componentWillReceiveProps(nextProps: IHeaderProps) {
		this.updateState({
			isAuthorized: nextProps.isAuthorized
		});
	}

	render(): JSX.Element {
		const { pathname } = this.props.location;

		let paths = [{ path: "/", label: "Home" }];

		if (this.state.isAuthorized) {
			paths = [
				...paths,
				...[
					{ path: ChangePasswordUrl, label: "Change password" },
					{ path: "/users", label: "Users" },
					{ path: "/products", label: "Products" }
				]
			];
		} else {
			paths = [...paths, ...[{ path: LoginUrl, label: "Login" }]];
		}

		return (
			<Header>
				{paths.map((element: any) => (
					<Link
						className={pathname === element.path ? "active" : ""}
						key={element.path}
						to={element.path}
					>
						{element.label}
					</Link>
				))}
				{this.state.isAuthorized ? (
					<a
						href="#"
						onClick={e => {
							e.preventDefault();
							this.props.clearCurrentUser();
							this.props.history.push("/authorize/login");
						}}
					>
						Log out
					</a>
				) : null}
			</Header>
		);
	}
}

export default HeaderComponent;
