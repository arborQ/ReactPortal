import * as React from "react";

import {
  CardBody,
  CardContainer,
  CardSubTitle,
  CardTitle,
} from "./card.elements";

export default function(props: Ui.Card.IProps): JSX.Element {
  return (
    <CardContainer {...{ size: props.size }}>
      {!!props.title ? <CardTitle>{props.title}</CardTitle> : null}
      {!!props.subTitle ? <CardSubTitle>{props.subTitle}</CardSubTitle> : null}
      <CardBody>
        {props.children}
      </CardBody>
    </CardContainer>
  );
}