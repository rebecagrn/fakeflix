import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaStar } from "react-icons/fa";
import { Featured, FeaturedTitle, Info, Buttons } from "./styles";

export default function FeaturedMovie({ item }) {
  const yearDate = new Date(item.first_air_date);

  const genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <Featured
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--overlay-y">
        <div className="featured--overlay-x">
          <FeaturedTitle className="featured--name">
            {item.original_name}
          </FeaturedTitle>
          <Info className="featured--info">
            <div className="featured--row">
              <div className="item--points">{item.vote_average} points</div>
              <div className="item--year">{yearDate.getFullYear()}</div>
              <div className="item--seasons">
                {item.number_of_seasons} season
                {item.number_of_seasons !== 1 ? "s" : ""}
              </div>
            </div>
            <div className="item--description">{item.overview}</div>
            <Buttons>
              <Link to={`/watch/${item.id}`} className="btn-watch">
                <FaPlay size={14} /> Watch Now
              </Link>
              <Link to={`/favorites/${item.id}`} className="btn-mylist">
                <FaStar size={14} /> My Favs
              </Link>
            </Buttons>
            <div className="item--genres">
              <strong>Genres:</strong> {genres.join(", ")}
            </div>
          </Info>
        </div>
      </div>
    </Featured>
  );
}
