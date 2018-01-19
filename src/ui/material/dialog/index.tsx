import * as React from "react";
import DialogCommonComponent from "../../common/dialog";
import { Backdrop, Dialog, DialogBody, DialogFooter, DialogHeader } from "./dialog.elements";

export default class DialogComponent extends DialogCommonComponent {
    render() {
        return (
            <div>
                <Dialog open={this.state.isOpen}>
                    {this.props.title === undefined ? null : <DialogHeader>{this.props.title}</DialogHeader>}
                    <DialogBody>{this.props.children}</DialogBody>
                </Dialog>
                <Backdrop className="backdrop" onClick={() => { this.close(); }} open={this.state.isOpen}></Backdrop>
            </div>
        );
    }
}
