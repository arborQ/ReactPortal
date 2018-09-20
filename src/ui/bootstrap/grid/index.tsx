import * as React from "react";
import GridCommontComponent from "../../common/grid";
import {
  Grid,
  GridBody,
  GridCell,
  GridHeader,
  GridHeaderCell,
  GridRow,
} from "./grid.elements";

export default class GridComponent<T extends { _id: number }>
  extends GridCommontComponent {

  render() {
    const columns = super.enumerateCells();

    const rows = this.props.data.map((r, index) => (
      <GridRow onClick={() => super.onRowClicked(r)} key={index} selected={this.isRowSelected(r)}>
        {columns.map((c) => <GridCell key={c.name}>{c.renderContent(r)}</GridCell>)}
      </GridRow>
    ));

    return (
      <Grid>
        <GridHeader>
          <GridRow>
            {columns.map((c) => <GridHeaderCell key={c.name}>{c.displayName}</GridHeaderCell>)}
          </GridRow>
        </GridHeader>
        <GridBody>
          {
            this.props.data.length === 0
              ? <GridRow><GridCell colSpan={columns.length}>No items</GridCell></GridRow>
              : rows
          }
        </GridBody>
      </Grid>
    );
  }
}
