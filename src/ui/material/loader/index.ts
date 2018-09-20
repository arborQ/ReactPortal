import styled from "styled-components";
import Styles from "../styles";

export default styled.div`
  height: 4px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${Styles.colors.second};
  margin: 10px 0;
  :before{
    display: block;
    position: absolute;
    content: "";
    left: -200px;
    width: 200px;
    height: 4px;
    background-color: ${Styles.colors.main};
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
      from {left: -200px; width: 30%;}
      50% {width: 30%;}
      70% {width: 70%;}
      80% { left: 50%;}
      95% {left: 120%;}
      to {left: 100%;}
  }
`;
