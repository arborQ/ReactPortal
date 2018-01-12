import { Assign } from "bx-utils";
import * as React from "react";

export default abstract class CommonButtonComponent extends React.Component<Ui.Button.IProps, Ui.Button.IState> {
    componentWillMount() {
        this.setState({ working: false });
    }

    buttonClicked() {
        this.setState(Assign(this.state, { working: true }));

        const clickAction = !this.props.click ? () => { /* */ } : this.props.click;

        Promise.resolve(clickAction()).then(() => {
            this.setState(Assign(this.state, { working: false }));
        });
    }


    render() {
        let text = this.props.label.trim();

        if (!text) {
            text = "BUTTON";
        }

        const renderProps: Ui.Button.IRenderProps = {
            disabled: this.state.working,
            onClick: this.buttonClicked.bind(this),
            text,
            type: !!this.props.click ? "button" : "submit",
        };

        return (
            this.renderButton(renderProps)
        );
    }

    protected abstract renderButton(renderProps: Ui.Button.IRenderProps): JSX.Element;
}
