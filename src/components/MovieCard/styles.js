import styled from "styled-components";

export const CardRow = styled.div`
  margin: 3vw 0;

  h2 {
    margin: 0px 0px 0px 60px;
    line-height: 1.25vw;
    font-size: 1.2em;
    color: #e5e5e5;
    font-weight: 700;
  }
`;

export const CardArea = styled.div`
  overflow-x: hidden;
  /* padding-left: 1.875rem; */
  padding-left: 52px;

  .movies--list {
    width: 999999999px;
  }
`;

export const MovieItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 4px;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
`;
