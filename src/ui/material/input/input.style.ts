import styled from 'styled-components';

export const Input = styled.input`
  font-size: 12px;
  padding: 5px;
  display: block;
  width: 300px;
  border:none;
  border-bottom:1px solid #757575;

  :focus { 
    outline:none; 
  }

  :focus ~ label, :valid ~ label     {
    top:-10px;
    font-size:12px;
    color:#5264AE;
  }

  :focus ~ .bar:before, :focus ~ .bar:after {
    width:50%;
  }
`;

export const InputContainer = styled.div`
  position:relative; 
  margin-bottom: 45px; 
`;

export const Highlight = styled.span`
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
`;

export const Bar = styled.span`
  position:relative; 
  display:block; 
  width:300px;

  :before, :after   {
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background:#5264AE; 
    transition:0.2s ease all; 
  }
  :before {
    left:50%;
  }
  :after {
    right:50%; 
  }
`;

export const Label = styled.label`
  color:#999; 
  font-size:12px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:5px;
  transition:0.2s ease all; 
`;