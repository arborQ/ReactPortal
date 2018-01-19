import styled, { keyframes } from "styled-components";
import styles from "../styles";

const jumpIn = keyframes`
  from {
    transform: translateY(-20%);
  }

  to {
    transform: translateY(0%);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.2) translateY(-120%);
  }

  to {
    transform: scale(1) translateY(0%);
  }
`;

const baseCss = styled.div`
    font-family: ${styles.font.family},sans-serif;
    padding: 15px;
`;

export const DialogHeader = baseCss.extend`
    font-size: ${styles.font.bigSize * 1.5 }px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #FFF;
    background-color: ${styles.colors.main};
`;

export const DialogBody = baseCss.extend`
    opacity: 0.9;
`;

export const DialogFooter = baseCss.extend`

`;

export const Dialog = styled.dialog`
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border: none;
	max-width: 90%;
	min-width: 320px;
	height: auto;
	z-index: 2000;
    padding: 0;
    &[open] {
        animation: ${jumpIn} 0.3s linear;
    }
`;

export const Backdrop = styled.div`
    position: fixed;
	width: 100%;
	height: 100%;
	visibility: ${(p: { open: boolean }) => p.open ? "visible" : "hidden"};
	top: 0;
	left: 0;
	z-index: 1000;
	opacity: ${(p: { open: boolean }) => p.open ? 1 : 0};
	background: rgba(0,0,0,0.2);
	transition: all 0.3s;
`;
