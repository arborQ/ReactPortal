declare namespace Ui.Grid {

    export interface IRenderProps {
    }

    export interface IGridSchema {
        [key: string]: IColumnState;
    }

    export interface IProps {
        schema: IGridSchema;
        data: any[];
        onSelected?: (data: any[]) => Promise<any> | void;
    }

    export interface IState {

    }

    export interface IColumnState {
        displayName?: string;
        renderContent?: (item: any) => JSX.Element | string;
        getData(item: any): any;
    }

    export interface IColumnRenderState {
        name: string;
        displayName: string;
        renderContent: (item: any) => JSX.Element | string;
    }
}
