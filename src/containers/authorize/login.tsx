import { authorizeService } from "bx-services";
import {
	AvatarComponent,
	ButtonComponent,
	CardComponent,
	FormComponent,
	HorizontalLayout,
	InputComponent
} from "bx-ui";
import { StateComponent } from "bx-utils";
import { Validator } from "bx-utils";
import * as React from "react";
import { connect } from "react-redux";

interface ILoginState {
	login: string;
	password: string;
	isAuthorized: boolean;
}

interface ILoginActionProps
	extends ILoginState,
		Services.Authorize.ISyncActions,
		Services.Authorize.ISyncAuthorize {}

@authorizeService.connect()
export default class LoginContainer extends StateComponent<
	ILoginActionProps,
	ILoginState
> {
	private fieldValidator = new Validator.Combine([
		new Validator.StringRequired(),
		new Validator.StringLength(1)
	]);

	private matchValidator = new Validator.Combine([
		new Validator.StringRequired(),
		new Validator.StringLength(1)
	]);

	private inputForm: Utils.Common.IRemapModel<ILoginState, Ui.Input.IProps> = {
		login: {
			change: (login: string) => {
				this.updateState({ login });
			},
			label: "Login",
			name: "login",
			validator: this.fieldValidator,
			value: "test"
		},
		password: {
			change: (password: string) => {
				this.updateState({ password });
			},
			isPassword: true,
			label: "Password",
			name: "password",
			validator: this.matchValidator
		}
	};

	componentWillReceiveProps(nextProps: ILoginActionProps) {
		this.updateState({
			isAuthorized: nextProps.isAuthorized
		});
	}

	submit($event: React.FormEvent<HTMLFormElement>): Promise<any> {
		return authorizeService
			.login(this.state.login, this.state.password)
			.then((res: string) => {
				this.props.setCurrentUser(res);
			});
	}

	render() {
		const cardProps: Ui.Card.IProps =
			this.props.currentUser !== null
				? {
						size: 200,
						subTitle: `Log in as ${this.props.currentUser.fullName}`,
						title: (
							<HorizontalLayout>
								<AvatarComponent email={this.props.currentUser.email} />
								<span>User validated</span>
							</HorizontalLayout>
						)
				  }
				: {
						size: 400,
						subTitle: "Please provide credentials",
						title: "Log in"
				  };

		return (
			<CardComponent {...cardProps}>
				{this.props.currentUser !== null ? (
					<div>
						<ButtonComponent
							label={`Log out: ${this.props.currentUser.login}`}
							click={() => this.props.clearCurrentUser()}
						/>
					</div>
				) : (
					<FormComponent submit={this.submit.bind(this)} delay={50}>
						{this.inputForm.login === undefined ? null : (
							<InputComponent
								{...this.inputForm.login}
								value={this.state.login}
							/>
						)}
						{this.inputForm.password === undefined ? null : (
							<InputComponent
								{...this.inputForm.password}
								value={this.state.password}
							/>
						)}
						<ButtonComponent label={`Validate`} />
					</FormComponent>
				)}
			</CardComponent>
		);
	}
}
