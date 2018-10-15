import * as md5 from "js-md5";
import styled from "styled-components";

export const AvatarComponent = styled.div`
  border-radius: 50%;
  background-image: url(http://www.gravatar.com/avatar.php?gravatar_id=${(p: {
    email: string;
  }) => md5.hex(p.email)});
  width: 2em;
  height: 2em;
  background-position: center;
  background-size: cover;
  position: relative;

  &:hover::after {
      content: "${(p: { email: string }) => p.email}";
      position: absolute;
      background-color: #FFF;
      top: -1em;
      left: 50%;
      border-radius: 3px;
      padding: 4px;
}
`;
