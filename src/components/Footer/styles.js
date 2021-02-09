import styled from "styled-components";

export const FooterStyle = styled.footer`
  color: #e5e5e5;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

  svg {
    position: relative;
    top: 2px;
  }

  a {
    color: #e50914;
    margin-right: 10px;

    &:hover {
      filter: brightness(90%);
    }
  }
`;
