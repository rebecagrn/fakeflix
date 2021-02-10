import styled from "styled-components";

export const FavoriteCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 150px;
  padding: 10px 30px;

  button {
    cursor: pointer;
    background-color: #e50914;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 6px;
    border: 0;
    border-radius: 4px;
    width: 100%;
    transform: scale(0.9);

    svg {
      position: relative;
      top: 3px;
    }

    &:hover {
      transform: scale(1);
      opacity: 0.8;
    }
  }
`;

export const FavText = styled.h3`
  display: flex;
  padding-top: 150px;
  justify-content: center;
  align-items: center;
`;
