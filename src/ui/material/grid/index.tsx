import * as React from "react";
import styled from "styled-components";
import styles from "../styles";

const Grid = styled.table`
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

const GridHeader = styled.thead`
    padding-bottom: 3px;
`;

const GridRow = styled.tr``;

const GridHeaderCell = styled.th`
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
    border-bottom: 2px solid #ececec;
    `;

const GridBody = styled.tbody`
    padding-bottom: 3px;
`;

const GridCell = styled.td`
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

export default class GridComponent<T extends { _id: number }>
extends React.Component<{ schema: any, model: T[] }, any> {

  render() {
    const columns = [];

    // tslint:disable-next-line:forin
    for (const index in this.props.schema) {
      columns.push(index);
    }

    const rows = this.props.model.map((r) => (
      <GridRow key={r._id}>
        { columns.map((c) => <GridCell key={`${c}_${r._id}`}>{r[c]}</GridCell>) }
      </GridRow>
    ));

    return (
      <Grid>
        <GridHeader>
          <GridRow>
            {columns.map((c: string) => <GridHeaderCell key={c}>{c}</GridHeaderCell>)}
          </GridRow>
        </GridHeader>
        <GridBody>
          {
            this.props.model.length === 0
              ? <GridRow><GridCell colSpan={columns.length}>No items</GridCell></GridRow>
              : rows
          }
        </GridBody>
      </Grid>
    );
  }
}
