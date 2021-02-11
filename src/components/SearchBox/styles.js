import styled from "styled-components";

export const Form = styled.form`
  cursor: pointer;

  svg {
    cursor: pointer;
    position: absolute;
    z-index: -1;
  }
`;

export const SearchField = styled.input`
  flex: 1;
  width: 30px;
  border: 0;
  color: #fff;
  padding: 3px 15px;
  border-radius: 4px;
  font-size: 14px;
  background: transparent;
  transition: width 0.5s;
  opacity: 1;

  &:focus {
    width: 100%;
    border-bottom: 1px solid #fff;
    opacity: 1;
  }
`;
