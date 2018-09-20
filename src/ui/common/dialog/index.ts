import * as React from "react";
import StateComponent from "../../../utils/stateComponent";

export default class DialogCommonComponent
    extends StateComponent<Ui.Dialog.IProps, Ui.Dialog.IState>
    implements Ui.Dialog.IModelDialog {
    private dialogPromise: () => void | null;

    constructor() {
        super({ isOpen: false });
    }

    open(): Promise<any> {
        return this.updateState({ isOpen: true }).then(() => {
            return new Promise<any>((resolve) => {
                this.dialogPromise = resolve;
            });
        });
    }
    close(): void {
        this.updateState({ isOpen: false }).then(() => this.dialogPromise());
    }

    componentWillUnmount() {
        this.close();
    }
}
