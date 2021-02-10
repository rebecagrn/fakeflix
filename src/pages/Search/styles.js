import styled from "styled-components";

export const Results = styled.div`
  padding: 80px 30px 30px 30px;

  .query--name {
    color: #e50914;
    font-style: italic;
  }

  h1 {
    margin-bottom: 30px;
  }
`;

export const SearchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 15px;

  img {
    width: 200px;
    padding: 10px;
  }

  .movie--title {
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 8px;
    max-width: 150px;
  }
`;
