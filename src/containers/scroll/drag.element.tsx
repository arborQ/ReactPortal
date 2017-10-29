import * as React from "react";
import styled from "styled-components";

const HandlerScroll = styled.div`
  background-color: #ddd;
  cursor: pointer;
  top: ${(p: Scroll.IHandlerElementProps) => !!p.isVertical ? `${p.scroll % 100}%` : "0"};
  left: ${(p: Scroll.IHandlerElementProps) => !p.isVertical ? `${p.scroll % 100}%` : "0"};
  width: ${(p: Scroll.IHandlerElementProps) => !!p.isVertical ? "20px" : "60px"};
  height: ${(p: Scroll.IHandlerElementProps) => !!p.isVertical ? "60px" : "20px"};
  position: relative;
`;

export default function DragElement(props: Scroll.IHandlerScrollProps): JSX.Element {
  return <HandlerScroll {...props}></HandlerScroll>;
}
