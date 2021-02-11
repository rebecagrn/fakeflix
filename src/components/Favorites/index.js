import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Header from "../Header";
import { FavoriteCard, HeadingText } from "./styles";
import { MovieItem } from "../MovieCard/styles";
import { FaEye } from "react-icons/fa";

export default function Favorites({ type }) {
  const { favorite, addMovieToWatchlater } = useContext(GlobalContext);

  return (
    <>
      <Header />
      {favorite.length > 0 ? (
        <FavoriteCard>
          {favorite.map((item, key) => (
            <div key={key} type="favorite" style={{ margin: "10px 20px" }}>
              <MovieItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.original_title}
                />
                <div type={type} item={item}>
                  <button onClick={() => addMovieToWatchlater(item)}>
                    To Watch Later <FaEye />
                  </button>
                </div>
              </MovieItem>
            </div>
          ))}
        </FavoriteCard>
      ) : (
        <HeadingText>
          You don't have any favorite movies yet! {`:(`}
        </HeadingText>
      )}
    </>
  );
}
