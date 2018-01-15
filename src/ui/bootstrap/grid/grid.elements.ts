import styled from "styled-components";
import styles from "../styles";

export const Grid = styled.table`
    position: relative;
    border: 1px solid rgba(0,0,0,.12);
    border-collapse: collapse;
    white-space: nowrap;
    background-color: #fff;
    width: 100%;

    * {
      font-family: ${styles.font.family},sans-serif;;
      font-size: 13px;
    }
`;

export const GridHeader = styled.thead`
    padding-bottom: 3px;
`;

export const GridRow = styled.tr`
    cursor: pointer;
    background-color: ${(props) => props.selected ? "#ececec" : "#fff"};
`;

export const GridHeaderCell = styled.th`
    position: relative;
    vertical-align: bottom;
    text-overflow: ellipsis;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    height: 48px;
    font-size: 12px;
    color: rgba(0,0,0,.54);
    padding-bottom: 8px;
    box-sizing: border-box;
    padding: 0 18px 12px 18px;
    text-align: center;
    border-bottom: 2px solid #ececec;
    `;

export const GridBody = styled.tbody`
    padding-bottom: 3px;
`;

export const GridCell = styled.td`
    position: relative;
    vertical-align: bottom;
    text-overflow: ellipsis;
    line-height: 24px;
    letter-spacing: 0;
    height: 48px;
    font-size: 12px;
    color: rgba(0,0,0,.54);
    padding-bottom: 8px;
    box-sizing: border-box;
    padding: 0 18px 12px 18px;
    text-align: center;
`;
