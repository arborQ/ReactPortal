import style from "styled-components";

export const CardContainer = style.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  flex: 1 1 auto;
  padding: 1.25rem;
  margin: 0 auto;
  max-width: ${(p: { size?: number }) => !!p.size ? p.size + "px" : "100%" };
  width: 80%;
`;

export const CardTitle = style.div``;

export const CardSubTitle = style.div``;

export const CardBody = style.div``;
