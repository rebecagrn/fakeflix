import React, { useEffect, useState } from "react";
import api from "../../services/http";
import { MovieList } from "./styles";
import MovieCard from "../../components/MovieCard";
import FeaturedMovie from "../../components/FeaturedMovie";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);

      const originals = list.filter((i) => i.slug === "originals");
      const randomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosenMovie = originals[0].items.results[randomMovie];
      const chosenInfo = await api.getMovieInfo(chosenMovie.id, "tv");

      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <Header />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <MovieList>
        {movieList.map((item, key) => (
          <MovieCard key={key} title={item.title} items={item.items} />
        ))}
      </MovieList>
      <Footer />
    </div>
  );
}
