import styled from "styled-components";

export const CardRow = styled.div`
  margin: 3vw 0;

  &:hover {
    .arrow-left,
    .arrow-right {
      opacity: 1;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 1.2em;
    line-height: 1.25vw;
    color: #e5e5e5;
    margin: 0px 0px 0px 60px;
  }

  .arrow-left,
  .arrow-right {
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(20, 20, 20, 0.5);
    z-index: 20;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: transform 0.1s ease-out 0.5s;
  }

  .arrow-left {
    left: 0;
  }
  .arrow-right {
    right: 0;
  }

  @media (max-width: 768px) {
    h2 {
      margin: 0px 0px 10px 25px;
    }
  }
`;

export const CardArea = styled.div`
  overflow-x: hidden;
  padding-left: 52px;

  .movies--list {
    transition: all ease 0.5s;
  }

  @media (max-width: 768px) {
    padding-left: 19px;
  }
`;

export const MovieItem = styled.div`
  display: inline-block;
  width: 150px;
  position: relative;
  cursor: pointer;

  &:hover {
    .btn-actions {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    border-radius: 4px;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }

  .btn-actions {
    position: absolute;
    top: 15px;
    left: 10px;
    width: 100%;
    overflow: hidden;
    opacity: 0;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;

  &:disabled {
    svg {
      color: red !important;
    }
  }
`;
