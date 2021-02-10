import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/http";
import Header from "../../components/Header";
import { Results } from "./styles";

export default function Search() {
  const search = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const searchMovies = async () => {
      const searchQuery = search.toString();

      const response = await api.getMovieSearch(searchQuery);

      console.log(response.results);
    };

    searchMovies();
  }, [search]);

  return (
    <>
      <Header />
      <Results>
        <h1 style={{ paddingTop: "150px", textAlign: "center" }}>
          Pesquisando por "
          <span className="query--name">{search.get("query")}</span>"
        </h1>
      </Results>
    </>
  );
}
