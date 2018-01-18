import * as React from "react";
import DialogCommonComponent from "../../common/dialog";
import { Backdrop, Dialog } from "./dialog.elements";

export default class DialogComponent extends DialogCommonComponent {
    render() {
        if (!this.state.isOpen) {
            return null;
        }

        return (
            <div>
                <Dialog open={true}>{this.props.children}</Dialog>
                <Backdrop className="backdrop" onClick={() => { this.close(); }}></Backdrop>
            </div>
        );
    }
}
