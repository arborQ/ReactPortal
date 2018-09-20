import * as React from "react";

export default abstract class GridComponent
    extends React.Component<Ui.Grid.IProps, { selectedRows: any[] }> {
    constructor() {
        super();
        this.state = { selectedRows: [] };
    }
    onRowClicked(rowData: any): void {
        if (!!this.props.onSelected) {
            const selectedRows = this.state.selectedRows.includes(rowData)
                ? [...this.state.selectedRows.filter((s) => s !== rowData)]
                : [...this.state.selectedRows, rowData];

            Promise.resolve(this.props.onSelected(selectedRows)).then(() => {
                this.setState({ selectedRows });
            });
        }
    }

    isRowSelected(rowData: any): boolean {
        return this.state.selectedRows.includes(rowData);
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
