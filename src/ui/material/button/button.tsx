import * as React from 'react';
import styled from 'styled-components';

let Button = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export default function ButtonComponent(props: { label: string, click?: () => void}) {
  return (
    <Button>{props.label}</Button>
  );
}
