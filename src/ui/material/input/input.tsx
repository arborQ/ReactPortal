import * as React from 'react';

import { 
  InputContainer,
  Input,
  Highlight,
  Bar,
  Label
} from './input.style';


export default function InputComponent(props: { value: string, label: string, change: (value: string) => void }) {
  return (
      <InputContainer>
        <Input type="text" value={props.value} onChange={e => props.change(e.target["value"])} />
        <Highlight></Highlight>
        <Bar className="bar"></Bar>
        <Label>{props.label}</Label>
      </InputContainer>
  );
}
