import { Styles } from "bx-ui";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";

import { Link, NavLink} from "react-router-dom";
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

const headerComponent: React.StatelessComponent<RouteComponentProps<any>> = (p: RouteComponentProps<any>) => {
    const { pathname } = p.location;

    const paths = [
        { path: "/", label: "Home" },
        { path: LoginUrl, label: "Login" },
        { path: ChangePasswordUrl, label: "Change password" },
        { path: "/users/list", label: "Users" },
    ];

    return (
    <Header>
        { paths
            .map(p =>
            <Link
                className={ pathname === p.path ? "active" : "" }
                key={ p.path }
                to={ p.path }>
                    { p.label }
            </Link> ) }
    </Header>);
};

export default headerComponent;
