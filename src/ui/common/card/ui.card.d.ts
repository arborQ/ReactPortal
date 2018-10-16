declare namespace Ui.Card {
  export interface IProps extends React.Props<HTMLDivElement> {
      title?: string | JSX.Element;
      subTitle?: string;

      size?: number;
  }
}
