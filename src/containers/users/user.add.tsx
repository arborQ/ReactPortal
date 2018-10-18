import {
	AnchorComponent,
	ButtonComponent,
	CardComponent,
	DialogComponent,
	FormComponent,
	GridComponent,
	HorizontalLayout,
	InputComponent,
	VerticalLayout
} from "bx-ui";
import { ajax, StateComponent, Validator } from "bx-utils";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Router, RouterProps } from "react-router";

export default class UserAddContainer extends StateComponent<
	RouteComponentProps<{}>,
	Containers.Users.IUser
> {
	private addSchema: { [key: string]: string } = {
		firstName: ""
	};

	private dialog: Ui.Dialog.IModelDialog | null = null;

	private fieldValidator = new Validator.Combine([
		new Validator.StringRequired(),
		new Validator.StringLength(1)
	]);

	private inputForm: Utils.Common.IRemapModel<
		Containers.Users.IUser,
		Ui.Input.IProps
	> = {
		login: {
			change: (login: string) => {
				this.updateState({ login });
			},
			label: "Login",
			name: "login",
			validator: this.fieldValidator,
			value: ""
		}
	};

	constructor() {
		super({
			login: "",
			firstName: "",
			lastName: "",
			email: "@gmail.com"
		});
	}

	submit(): void {
		/* */
	}

	addUser(): Promise<number> {
		return ajax.post("/api/users", {
			login: this.state.login,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email
		});
	}

	propsWillChange(): boolean {
		return false;
	}

	render() {
		const inputFields: Ui.Input.IProps[] = [
			{
				name: "login",
				label: "Login",
				value: this.state.login,
				change: login => this.updateState({ login }),
				validator: new Validator.StringRequired()
			},
			{
				name: "firstName",
				label: "First name",
				value: this.state.firstName,
				change: firstName => this.updateState({ firstName }),
				validator: new Validator.StringRequired()
			},
			{
				name: "lastName",
				label: "Last name",
				value: this.state.lastName,
				change: lastName => this.updateState({ lastName }),
				validator: new Validator.StringRequired()
			},
			{
				name: "email",
				label: "Email address",
				value: this.state.email,
				change: email => this.updateState({ email }),
				validator: new Validator.StringRequired()
			}
		];

		return (
			<CardComponent>
				<VerticalLayout>
					<FormComponent submit={this.submit.bind(this)} delay={50}>
						{inputFields.map(f => (
							<InputComponent key={f.name} {...f} />
						))}
						<HorizontalLayout>
							<ButtonComponent label="Save" click={this.addUser.bind(this)} />
							<AnchorComponent href="/users">{"Cancel"}</AnchorComponent>
						</HorizontalLayout>
					</FormComponent>
				</VerticalLayout>
			</CardComponent>
		);
	}
}
