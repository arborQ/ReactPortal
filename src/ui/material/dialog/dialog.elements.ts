import styled from "styled-components";

export const Dialog = styled.dialog`
    z-index: 1000;
    border: none;
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.1);
    z-index: 999;
`;
