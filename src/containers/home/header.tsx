import * as React from 'react';
import styled from 'styled-components';

var Header = styled.header`
    background-color: #ececec;
    width: 100%;
    height: 30px;
    line-height: 30px;
`;

var headerComponent: React.StatelessComponent<any> = (p: any) => {
    return <Header>Header</Header>;
};

export default headerComponent;