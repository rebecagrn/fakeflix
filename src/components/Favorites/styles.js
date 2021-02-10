import styled from "styled-components";

export const FavoriteCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

    svg {
      position: relative;
      top: 3px;
    }
  }
`;

export const FavText = styled.h3`
  display: flex;
  padding-top: 150px;
  justify-content: center;
  align-items: center;
`;
