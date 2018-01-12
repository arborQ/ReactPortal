import style from "styled-components";
import Styles from "../styles";

export const CardContainer = style.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  padding: 16px;
  margin: 0 auto;
  max-width: ${(p: { size?: number }) => !!p.size ? p.size + "px" : "100%" };
  width: 80%;
`;

export const CardTitle = style.h1`
  color: #333;
  font-weight: 400;
  font-size: ${Styles.font.bigSize}px;
  font-family: ${Styles.font.family},sans-serif;
  line-height: 1.35417em;
  margin: 0;
  display: block;
`;

export const CardSubTitle = style.h3`
  font-size: ${Styles.font.smallSize}px;
  font-weight: 400;
  font-family: ${Styles.font.family},sans-serif;
  line-height: 1.5em;
  color: rgba(0, 0, 0, 0.54);
`;

export const CardBody = style.div``;
