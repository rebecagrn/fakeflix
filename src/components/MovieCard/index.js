import React from "react";
import { CardRow, CardArea, MovieItem } from "./styles";

export default function MovieCard({ title, items }) {
  return (
    <CardRow>
      <h2>{title}</h2>
      <CardArea>
        <div className="movies--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </MovieItem>
            ))}
        </div>
      </CardArea>
    </CardRow>
  );
}
