import styled from "styled-components";
import Styles from "../styles";

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    cursor: pointer;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;

    font-size: ${Styles.font.size}px;
    font-family: ${Styles.font.family},sans-serif;
`;
