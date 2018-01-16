import * as React from "react";
import AnchorBaseComponent from "../../common/anchor";
import { Anchor } from "./anchor.elements";

export default class AnchorComponent extends AnchorBaseComponent {
    render() {
        const attr = this.anchorAttributes;
        return (
            <Anchor to={attr.href}>
                {this.props.children}
            </Anchor>
        );
    }
}
