declare namespace Scroll {
  export interface IScrollProps {
    vertical?: number;
    horizontal?: number;
  }

  export interface IHandlerElementProps {
    isVertical?: boolean;
    scroll: number;
  }

  export interface IHandlerScrollProps extends IHandlerElementProps {
    isVertical?: boolean;
    scroll: number;
    onChange: (newValue: number) => void;
  }
}