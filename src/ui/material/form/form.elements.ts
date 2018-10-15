import styled, { keyframes } from "styled-components";

export const Form = styled.form`
    .content {
        display: ${ (p: { loading: boolean }) => !p.loading ? "block" : "none"};
    }

    .loading {
        display: ${ (p: { loading: boolean }) => p.loading ? "block" : "none"};
    }
`;
