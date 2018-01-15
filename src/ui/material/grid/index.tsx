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

    const rows = this.props.model.map((r) => (
      <GridRow key={r._id}>
        {columns.map((c) => <GridCell key={c.name}>{c.renderContent()}</GridCell>)}
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
            this.props.model.length === 0
              ? <GridRow><GridCell colSpan={columns.length}>No items</GridCell></GridRow>
              : rows
          }
        </GridBody>
      </Grid>
    );
  }
}
