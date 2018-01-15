declare namespace Ui.Grid {

    export interface IRenderProps {
    }

    export interface IProps {
        schema: { [key: string]: IColumnState }
        data: any[];
    }

    export interface IState {

    }

    export interface IColumnState {
        displayName?: string;
        getData(): string;
        renderContent?: () => JSX.Element | string;
    }

    export interface IColumnRenderState {
        name: string;
        displayName: string;
        renderContent: () => JSX.Element | string;
    }
}
