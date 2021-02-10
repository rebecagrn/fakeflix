import styled from "styled-components";

export const SearchField = styled.input`
  flex: 1;
  width: 80%;
  border: 0;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 14px;

  transition: all 0.3s ease-in;

  &:focus {
    width: 100%;
  }
`;
