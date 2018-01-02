import styled from "styled-components";

export enum ContainerSize {
  unlimited = null,
  large = 1200,
  mediom = 800,
  small = 400,
}

export default styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  padding: 16px;
  margin: 0 auto;
  max-width: ${(p: { size?: ContainerSize | number }) => !!p.size ? p.size + "px" : "100%"};
  width: 80%;
`;
