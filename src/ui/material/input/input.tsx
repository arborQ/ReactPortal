import * as React from 'react';

import { 
  InputContainer,
  Input,
  Label
} from './input.style';


export default function InputComponent(props: { value: string, isPassword?: boolean, label: string, change: (value: string) => void }) {
  return (
      <InputContainer>
        <Input required type={ !!props.isPassword ? "password": "text" } value={props.value} onChange={e => props.change(e.target["value"])} />
        <Label>{props.label}</Label>
      </InputContainer>
  );
}
