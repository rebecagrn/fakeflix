import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { CardRow, CardArea, MovieItem, Button } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar, FaEye } from "react-icons/fa";

export default function MovieCard({ title, items }) {
  const {
    addMovieToFavorite,
    favorite,
    addMovieToWatchlater,
    watchlater,
  } = useContext(GlobalContext);

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <CardRow>
      <h2>{title}</h2>
      <div className="arrow-left" onClick={handleLeftArrow}>
        <IoIosArrowBack size={40} />
      </div>
      <div className="arrow-right" onClick={handleRightArrow}>
        <IoIosArrowForward size={40} />
      </div>
      <CardArea>
        <div
          className="movies--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => {
              const storedMovie = favorite.find((obj) => obj.id === item.id);
              const storedWatched = watchlater.find(
                (obj) => obj.id === item.id
              );
              const favoriteDisabled = !!storedMovie;
              const watchLaterDisabled = !!storedWatched;
              return (
                <MovieItem key={key}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                  <div className="btn-actions">
                    <Button
                      className="favorite-btn"
                      type="button"
                      disabled={favoriteDisabled}
                      onClick={() => addMovieToFavorite(item)}
                    >
                      <FaStar color="#ccc" size={20} />
                    </Button>
                    <Button
                      className="favorite-btn"
                      type="button"
                      disabled={watchLaterDisabled}
                      onClick={() => addMovieToWatchlater(item)}
                    >
                      <FaEye
                        color="#ccc"
                        size={20}
                        style={{ marginLeft: "3px" }}
                      />
                    </Button>
                  </div>
                </MovieItem>
              );
            })}
        </div>
      </CardArea>
    </CardRow>
  );
}
