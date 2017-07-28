import * as React from 'react';
import styled from 'styled-components';
import styles from '../styles';

let Grid = styled.table`
    position: relative;
    border: 1px solid rgba(0,0,0,.12);
    border-collapse: collapse;
    white-space: nowrap;
    font-size: 13px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    width: 100%;

    * {
      font-family: ${styles.font.family},sans-serif;;
    }
`;

let GridHeader = styled.thead`
    padding-bottom: 3px;
`;

let GridRow = styled.tr``;

let GridHeaderCell = styled.th`
    position: relative;
    vertical-align: bottom;
    text-overflow: ellipsis;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    height: 48px;
    font-size: 12px;
    color: rgba(0,0,0,.54);
    padding-bottom: 8px;
    box-sizing: border-box;
    padding: 0 18px 12px 18px;
    text-align: center;
`;

let GridBody = styled.tbody`
    padding-bottom: 3px;
`;

let GridCell = styled.td`
    position: relative;
    vertical-align: bottom;
    text-overflow: ellipsis;
    line-height: 24px;
    letter-spacing: 0;
    height: 48px;
    font-size: 12px;
    color: rgba(0,0,0,.54);
    padding-bottom: 8px;
    box-sizing: border-box;
    padding: 0 18px 12px 18px;
    text-align: center;
`;

export default class GridComponent extends React.Component<any, any> {
  render() {
    return (
      <Grid>
        <GridHeader>
          <GridRow>
            <GridHeaderCell>Id</GridHeaderCell>
            <GridHeaderCell>First name</GridHeaderCell>
            <GridHeaderCell>Last name</GridHeaderCell>
          </GridRow>
        </GridHeader>
        <GridBody>
          <GridRow>
            <GridCell>Id</GridCell>
            <GridCell>First name</GridCell>
            <GridCell>Last name</GridCell>
          </GridRow>
        </GridBody>
      </Grid>
    )
  }
}