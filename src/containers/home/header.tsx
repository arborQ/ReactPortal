import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Styles } from 'bx-ui';

import { LoginUrl, ChangePasswordUrl } from '../authorize';
import { NavLink, Link} from 'react-router-dom';

var Header = styled.header`
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
    }
`;

interface ILinkProps {

}

var linkComponent: React.StatelessComponent<RouteComponentProps<ILinkProps>> = (p: RouteComponentProps<ILinkProps>) => {
    return <Link to={'/'}></Link>;
 }

var headerComponent: React.StatelessComponent<RouteComponentProps<any>> = (p: RouteComponentProps<any>) => {
    console.log(p);
    return (<Header>
        <Link to={'/'}>Home</Link>
        <Link to={LoginUrl}>Login</Link>
        <Link to={ChangePasswordUrl}>Change password</Link>
        <Link to={'/users/list'}>Users</Link>
    </Header>);
};

export default headerComponent;