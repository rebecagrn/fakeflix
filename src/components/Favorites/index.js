import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Header from "../Header";
import { FavoriteCard, FavText } from "./styles";
import { MovieItem } from "../MovieCard/styles";
import { FaEye, FaTrash } from "react-icons/fa";

export default function Favorites({ item, type }) {
  const { favorite, addMovieToWatchlater } = useContext(GlobalContext);

  return (
    <>
      <Header />
      {favorite.length > 0 ? (
        <FavoriteCard>
          {favorite.map((item, key) => (
            <div key={key} type="favorite">
              <MovieItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
                <div type={type} item={item}>
                  <button onClick={() => addMovieToWatchlater(item)}>
                    Watchlater <FaEye />
                  </button>
                </div>
              </MovieItem>
            </div>
          ))}
        </FavoriteCard>
      ) : (
        <FavText>You don't have any favorite movies yet! {`:(`}</FavText>
      )}
    </>
  );
}
