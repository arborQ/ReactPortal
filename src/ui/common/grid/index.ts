import * as React from "react";

export default abstract class GridComponent
    extends React.Component<Ui.Grid.IProps, {}> {

    render() {
        return null;
        // const columns = [];

        // // tslint:disable-next-line:forin
        // for (const index in this.props.schema) {
        //   columns.push(index);
        // }

        // const rows = this.props.model.map((r) => (
        //   <GridRow key={r._id}>
        //     { columns.map((c) => <GridCell key={`${c}_${r._id}`}>{r[c]}</GridCell>) }
        //   </GridRow>
        // ));

        // return (
        //   <Grid>
        //     <GridHeader>
        //       <GridRow>
        //         {columns.map((c: string) => <GridHeaderCell key={c}>{c}</GridHeaderCell>)}
        //       </GridRow>
        //     </GridHeader>
        //     <GridBody>
        //       {
        //         this.props.model.length === 0
        //           ? <GridRow><GridCell colSpan={columns.length}>No items</GridCell></GridRow>
        //           : rows
        //       }
        //     </GridBody>
        //   </Grid>
        // );
    }

    protected enumerateCells(): Ui.Grid.IColumnRenderState[] {
        return Object.keys(this.props.schema).map((name: string) => {
            const schemaForKey: Ui.Grid.IColumnState = this.props.schema[name];
            const result: Ui.Grid.IColumnRenderState = {
                name,
                displayName: schemaForKey.displayName || name,
                renderContent: !schemaForKey.renderContent ? schemaForKey.getData : schemaForKey.renderContent,
            };

            return result;
        });
    }
}
