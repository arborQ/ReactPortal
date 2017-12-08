import styled from "styled-components";
import Styles from "../styles";

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid rgba(0,0,0,.12);
    display: block;
    font-size: ${Styles.font.size}px;
    font-family: ${Styles.font.family},sans-serif;
    margin: 0;
    padding: 8px 5px;
    width: 100%;
    background: 0 0;
    text-align: left;

    :focus {
      outline: none;
    }
    :focus ~ label, :valid ~ label {
      top: 0;
      font-size: ${Styles.font.size - 4}px;
    }
    :focus ~ label:after {
      visibility: visible;
      width: 100%;
      left: 0;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    font-size: ${Styles.font.size}px;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 20px 0;

`;

export const Label = styled.label`
    font-family: ${Styles.font.family},sans-serif;
    bottom: 0;
    color: rgba(0,0,0,.26);
    font-size: ${Styles.font.size}px;
    left: 0;
    right: 0;
    pointer-events: none;
    position: absolute;
    display: block;
    top: 24px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
    transition: 0.2s linear;

    :after {
      background-color: ${Styles.colors.main};
      bottom: 20px;
      content: '';
      height: 2px;
      left: 45%;
      position: absolute;
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      visibility: hidden;
      width: 10px;
    }
`;

export const ValidationMessage = styled.span`
  font-family: ${Styles.font.family},sans-serif;
  color: Red;
  font-size: ${Styles.font.smallSize}px;
  float: right;
  position: absolute;
`;
