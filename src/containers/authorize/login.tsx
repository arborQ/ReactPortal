import { authorizeService } from "bx-services";
import {
  ButtonComponent,
  CardComponent,
  FormComponent,
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

interface ILoginActionProps extends ILoginState {
  changeLogin(login: string): void;
  clearLogin(): void;
}

@connect(
  (store: Stores.Authorize.IAuthorizeStoreState): Partial<ILoginState> => {
    const { user } = store;

    return {
      isAuthorized: user.login !== null,
      login: "from store"
    };
  },
  (dispach: (event: any) => void) => {
    return {
      changeLogin(login: string): void {
        dispach({ type: "change_login", login });
      },
      clearLogin(): void {
        dispach({ type: "clear_login" });
      }
    };
  }
)
export default class LoginContainer extends StateComponent<
  ILoginActionProps,
  ILoginState
> {
  componentWillReceiveProps(nextProps: ILoginActionProps) {
    this.updateState({
      isAuthorized: nextProps.isAuthorized
    });
  }

  componentDidMount() {
    authorizeService.isAuthorized().then(success => {
      if (success) {
        this.props.changeLogin(this.state.login);
      }
    });
  }

  submit($event: React.FormEvent<HTMLFormElement>): Promise<any> {
    return authorizeService
      .login(this.state.login, this.state.password)
      .then((res: any) => {
        this.props.changeLogin(this.state.login);
      });
  }

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

  render() {
    return (
      <CardComponent
        size={400}
        title={"Log in"}
        subTitle={"Please provide credentials"}
      >
        <FormComponent submit={this.submit.bind(this)}>
          {this.inputForm.login == undefined ? null : (
            <InputComponent
              {...this.inputForm.login}
              value={this.state.login}
            />
          )}
          {this.inputForm.password == undefined ? null : (
            <InputComponent
              {...this.inputForm.password}
              value={this.state.password}
            />
          )}
          {this.state.isAuthorized ? (
            <ButtonComponent
              label={`Log out: ${this.state.login}`}
              click={() => this.props.clearLogin()}
            />
          ) : (
            <ButtonComponent label={`Save: ${this.state.login}`} />
          )}
        </FormComponent>
      </CardComponent>
    );
  }
}
