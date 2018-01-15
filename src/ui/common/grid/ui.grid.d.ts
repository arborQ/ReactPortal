declare namespace Ui.Grid {

    export interface IRenderProps {
    }

    export interface IGridSchema {
        [key: string]: IColumnState;
    }

    export interface IProps {
        schema: IGridSchema;
        data: any[];
    }

    export interface IState {

    }

    export interface IColumnState {
        displayName?: string;
        getData(item: any): any;
        renderContent?: (item: any) => JSX.Element | string;
    }

    export interface IColumnRenderState {
        name: string;
        displayName: string;
        renderContent: (item: any) => JSX.Element | string;
    }
}
