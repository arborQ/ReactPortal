declare namespace Ui.Button {

    export interface IRenderProps {
        type: "button" | "submit";
        disabled: boolean;
        onClick: () => void;
        text: string;
    }

    export interface IProps {
        label: string;
        click?: () => void | Promise<any>;
    }

    export interface IState {
        working: boolean;
    }
}
