import styled from "styled-components";

export const Results = styled.div`
  padding: 80px 30px 30px 30px;

  .query--name {
    color: #e50914;
    font-style: italic;
  }

  h1 {
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const SearchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px auto;

  img {
    width: 150px;
    padding: 4px;
  }

  .movie--title {
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 8px;
    max-width: 150px;
  }
`;
