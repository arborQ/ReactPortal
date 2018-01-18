import * as React from "react";
import StateComponent from "../../../utils/stateComponent";

export default class DialogCommonComponent
    extends StateComponent<Ui.Dialog.IProps, Ui.Dialog.IState>
    implements Ui.Dialog.IModelDialog {

    constructor() {
        super({ isOpen: false });
    }

    open(): Promise<any> {
        return this.updateState({ isOpen: true });
    }
    close(): void {
        this.updateState({ isOpen: false });
    }
}
