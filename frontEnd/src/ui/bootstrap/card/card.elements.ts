import style from "styled-components";
import Styles from "../styles";

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

export const CardTitle = style.h5`
  font-size: ${Styles.font.sizeBig}px;
  font-family: ${Styles.font.family},sans-serif;
  line-height: 1.2;
  margin: 0;
  margin-bottom: .75rem;
  font-weight: 400;
`;

export const CardSubTitle = style.h6`
  font-size: ${Styles.font.smallSize}px;
  font-family: ${Styles.font.family},sans-serif;
  line-height: 1.2;
  margin-top: -.375rem;
  margin-bottom: .5rem;
  font-weight: normal;
  color: #868e96;
`;

export const CardBody = style.div``;
