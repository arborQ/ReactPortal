import * as React from 'react';
import styled from 'styled-components';
import { Styles } from 'bx-ui';
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

var headerComponent: React.StatelessComponent<any> = (p: any) => {
    return (<Header>
        <Link to={'/'}>Home</Link>
        <Link to={'/authorize/login'}>Login</Link>
        <Link to={'/users/list'}>Users</Link>
    </Header>);
};

export default headerComponent;