import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Header from "../Header";
import { FavoriteCard, FavText } from "../Favorites/styles";
import { MovieItem } from "../MovieCard/styles";

export default function Watchlater() {
  const { watchlater } = useContext(GlobalContext);
  return (
    <>
      <Header />
      {watchlater.length > 0 ? (
        <FavoriteCard>
          {watchlater.map((item, key) => (
            <div key={key} type="watchlater">
              <MovieItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
                <div type={watchlater} item={item}></div>
              </MovieItem>
            </div>
          ))}
        </FavoriteCard>
      ) : (
        <FavText>You don't have any movies to watchlater</FavText>
      )}
    </>
  );
}
