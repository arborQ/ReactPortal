import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledComponentClass } from "styled-components";
import styles from "../styles";

export const Anchor = styled(Link)`
    background: 0 0;
    border: none;
    border-radius: 2px;
    color: #000;
    position: relative;
    margin: 0;
    min-width: 64px;
    padding: 2px 10px;
    display: inline-block;
    font-size: ${styles.font.size}em;
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
    line-height: ${styles.font.size * 2}em;
    vertical-align: middle;
    background: rgba(158,158,158,.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
`;
