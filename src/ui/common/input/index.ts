import * as React from "react";

export default abstract class InputComponent extends React.PureComponent<
	Ui.Input.IProps,
	Ui.Input.IState
> {
	constructor() {
		super();
		this.state = { value: "", isValid: true, working: false };
	}

	componentDidMount() {
		this.setStateFromProps(this.props);
	}

	componentWillReceiveProps(newProps: Ui.Input.IProps): void {
		this.setStateFromProps(newProps);
	}

	updateParent(value: string): void {
		this.setState({
			...this.state,
			value
		});

		if (!!this.props.validator) {
			this.props.validator
				.validate(value)
				.then(result => {
					this.setState(
						{
							...this.state,
							...{
								value,
								isValid: true,
								working: false,
								messages: []
							}
						},
						() => {
							this.props.change(value);
						}
					);
				})
				.catch((result: Utils.Validation.IValidationResult) => {
					this.setState(
						Object.assign(
							this.state,
							{
								value,
								isValid: false,
								working: false,
								messages: [result.message]
							},
							() => {
								this.props.change(value);
							}
						)
					);
				});
		}
	}

	render() {
		return this.renderInput();
	}

	protected abstract renderInput(): JSX.Element;

	protected resetState(): void {
		this.setStateFromProps(this.props);
	}

	private setStateFromProps(props: Ui.Input.IProps): void {
		this.setState({ ...this.state, ...{ value: props.value || "" } });
	}
}
