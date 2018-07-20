import { Styles } from "bx-ui";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";

import { authorizeService } from "bx-services";
import { Link, NavLink } from "react-router-dom";
import { ChangePasswordUrl, LoginUrl } from "../authorize";

const Header = styled.header`
    background-color: ${Styles.colors.main};
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    font-size: ${Styles.font.size}px;
    font-family: ${Styles.font.family},sans-serif;

    a {
        padding: 0 10px;
        text-decoration: none;
        color: ${Styles.colors.second};

        &.active {
            color : #FFF;
        }
    }
`;

class HeaderComponent extends React.Component<RouteComponentProps<any>, { isAuthorized: boolean }> {
    constructor() {
        super();
        this.state = { isAuthorized: false };
    }

    componentWillMount() {
        authorizeService.statusChanged((user) => {
            this.setState({
                ...this.state,
                ...{ isAuthorized: !!user && !!user.uid },
            });
        });
    }

    render(): JSX.Element {
        const { pathname } = this.props.location;

        let paths = [
            { path: "/", label: "Home" },
        ];

        if (this.state.isAuthorized) {
            paths = [
                ...paths,
                ...[
                    { path: ChangePasswordUrl, label: "Change password" },
                    { path: "/users", label: "Users" },
                    { path: "/products", label: "Products" },
                ],
            ];
        } else {
            paths = [
                ...paths,
                ...[
                    { path: LoginUrl, label: "Login" },
                ],
            ];
        }

        return (
            <Header>
                {paths
                    .map((element: any) =>
                        <Link
                            className={pathname === element.path ? "active" : ""}
                            key={element.path}
                            to={element.path}>
                            {element.label}
                        </Link>)}
                {this.state.isAuthorized ? <a onClick={() => { authorizeService.logout(); }}>Log out</a> : null}
            </Header>);
    }
}

export default HeaderComponent;