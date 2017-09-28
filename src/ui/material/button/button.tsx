import { Assign } from "bx-utils";
import * as React from "react";
import styled from "styled-components";
import { setTimeout } from "timers";
import styles from "../styles";

const Button = styled.button`
    background: 0 0;
    border: none;
    border-radius: 2px;
    color: #000;
    position: relative;
    margin: 0;
    min-width: 64px;
    padding: 2px 16px;
    display: inline-block;
    font-family: ${styles.font.family},sans-serif;
    font-size: ${styles.font.size}px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    overflow: hidden;
    will-change: box-shadow;
    transition:
      box-shadow .2s cubic-bezier(.4,0,1,1),
      background-color .2s cubic-bezier(.4,0,.2,1),
      color .2s cubic-bezier(.4,0,.2,1);
    outline: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
    background: rgba(158,158,158,.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
`;

const Ripple = styled.span`
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
    overflow: hidden;
`;

const RippleAnimation = styled.span`
    transition: transform .3s cubic-bezier(0,0,.2,1),
      width .3s cubic-bezier(0,0,.2,1),
      height .3s cubic-bezier(0,0,.2,1),
      opacity .6s cubic-bezier(0,0,.2,1);
    transition: transform .3s cubic-bezier(0,0,.2,1),
      width .3s cubic-bezier(0,0,.2,1),
      height .3s cubic-bezier(0,0,.2,1),
      opacity .6s cubic-bezier(0,0,.2,1),
    -webkit-transform .3s cubic-bezier(0,0,.2,1);
    opacity: ${(p: { show: boolean }) => p.show ? ".3" : "0"};
  `;

export interface IButtonProps {
  label: string;
  click?: () => void | Promise<any>;
}

export interface IButtonState {
  working: boolean;
}

export default class ButtonComponent extends React.Component<IButtonProps, IButtonState> {
  componentWillMount() {
    this.setState({ working: false });
  }

  buttonClicked() {
    this.setState(Assign(this.state, { working: true }));

    const clickAction = !this.props.click ? () => { /* */ } : this.props.click;

    Promise.resolve(clickAction()).then(() => {
      this.setState(Assign(this.state, { working: false }));
    });
  }

  render() {
    return (
      <Button
        type={!!this.props.click ? "button" : "submit"}
        disabled={this.state.working}
        onClick={this.buttonClicked.bind(this)}>
          <span>{this.props.label.trim()}</span>
      </Button>
    );
  }
}
