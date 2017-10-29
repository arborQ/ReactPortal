import * as React from "react";
import styled from "styled-components";
import DragElement from "./drag.element";

const ScrollContainer = styled.div`
  width: 100%;
  min-height: 20px;
  height: 100%;
  background-color: Red;
  position: fixed;
`;

const HorizontalScroll = styled.div`
  width: 100%;
  height: 20px;
  background-color: Green;
  padding-left: 20px;
  padding-right: 60px;

  bottom: 0;
  position: fixed;
`;

const VerticalScroll = styled.div`
  width: 20px;
  height: calc(100vh - 70px);
  background-color: Green;
  padding-bottom: 60px;
`;

export default class ScrollContainerComponent extends React.Component<Scroll.IScrollProps, { scroll: number }> {
  constructor() {
    super();
    this.state = { scroll: 0 };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({ scroll: this.state.scroll + 10 });
    // }, 500);
  }

  drag(e: MouseEvent): void {
    console.log(e.target);
  }

  render() {
    return (
      <ScrollContainer>
        <HorizontalScroll>
          <DragElement />
        </HorizontalScroll>
        <VerticalScroll></VerticalScroll>
      </ScrollContainer>
    );
  }
}
