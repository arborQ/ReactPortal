import styled from "styled-components";
import Styles from "../styles";

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  font-size: ${Styles.font.size}px;
  font-family: ${Styles.font.family},sans-serif;
  :focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: ${Styles.font.size}px;
  font-family: ${Styles.font.family},sans-serif;
`;

export const ValidationMessage = styled.span`

`;
