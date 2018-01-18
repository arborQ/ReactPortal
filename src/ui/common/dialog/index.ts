import * as React from "react";

import * as XX from "bx-utils";
console.log("StateComponent", XX);
export default class DialogCommonComponent extends React.Component<Ui.Dialog.IProps, Ui.Dialog.IState> {

    constructor() {
        super();
        this.state = { isOpen: true };
    }

    open(): Promise<any> {
        return null;
        // return this.updateState({ isOpen: true });
    }
    close(): void {
        // this.updateState({ isOpen: false });
    }

}
