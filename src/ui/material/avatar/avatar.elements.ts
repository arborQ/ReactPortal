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
  border: 3px solid rgba(150,180,150,0.8);

  &:hover {
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
