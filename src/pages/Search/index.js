import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/http";
import Header from "../../components/Header";
import { Results } from "./styles";
import { SearchRow, SearchCard } from "./styles";

export default function Search() {
  const [results, setResults] = useState([]);
  const search = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const searchMovies = async () => {
      const searchQuery = search.toString();

      const response = await api.getMovieSearch(searchQuery);

      setResults(response.results);
    };

    searchMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Results>
        <h1 style={{ paddingTop: "150px", textAlign: "center" }}>
          Searching for "
          <span className="query--name">{search.get("query")}</span>"
        </h1>
        {results.length > 0 ? (
          <SearchRow>
            {results.map((results, id) => (
              <SearchCard key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${results.poster_path}`}
                  alt={results.original_title}
                />
                <p className="movie--title">{results.original_title}</p>
              </SearchCard>
            ))}
          </SearchRow>
        ) : (
          <h1>No results {`:(`}</h1>
        )}
      </Results>
    </>
  );
}
