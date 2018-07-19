declare namespace Ui.Dialog {
    export interface IModelDialog {
        open(): Promise<any>;
        close(): void;
    }

    export interface IProps {
        title?: string;
    }

    export interface IState {
        isOpen: boolean;
    }
}
