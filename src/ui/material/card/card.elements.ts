import style from "styled-components";

export const CardContainer = style.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  padding: 16px;
  margin: 0 auto;
  max-width: ${(p: { size?: number }) => !!p.size ? p.size + "px" : "100%" };
  width: 80%;
`;

export const CardTitle = style.div``;

export const CardSubTitle = style.div``;

export const CardBody = style.div``;
