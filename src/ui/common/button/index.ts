import { Assign } from "bx-utils";
import * as React from "react";

export default abstract class CommonButtonComponent extends React.Component<
	Ui.Button.IProps,
	Ui.Button.IState
> {
	componentWillMount() {
		this.setState({ working: false });
	}

	buttonClicked($event: Event) {
		this.setState(Assign(this.state, { working: true }));

		const clickAction = !this.props.click
			? () => {
					/* */
			}
			: this.props.click;

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
			disabled: this.props.disabled || this.state.working,
			onClick: this.buttonClicked.bind(this),
			text,
			type:
				this.props.type === undefined
					? !!this.props.click
						? "button"
						: "submit"
					: "button"
		};

		return this.renderButton(renderProps);
	}

	protected abstract renderButton(
		renderProps: Ui.Button.IRenderProps
	): JSX.Element;
}
