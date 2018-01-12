declare namespace Ui.Input {

  export interface IRenderProps {
  }

  export interface IProps {
    name?: string;
    value: string;
    isPassword?: boolean;
    label: string;
    change: (value: string) => void | Promise<any>;
    delay?: number;
    validator?: any;
}

export interface IState {
    value: string;
    isValid: boolean;
    working: boolean;
    messages?: string[];
}
}
