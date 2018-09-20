import * as React from "react";

export default abstract class AnchorBaseComponent extends React.Component<Ui.Anchor.IProps, {}> {
    protected get anchorAttributes(): React.HTMLProps<HTMLAnchorElement> {
        return {
            href: this.props.href === undefined ? "#" : this.props.href,
            disabled: !!this.props.disabled,
        };
    }
}
