import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favorite: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [],
  watchlater: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("watchlater"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(state.favorite));
    localStorage.setItem("watchlater", JSON.stringify(state.watchlater));
  }, [state]);

  // actions
  const addMovieToFavorite = (item) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITE", payload: item });
  };

  const addMovieToWatchlater = (item) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLATER", payload: item });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorite: state.favorite,
        watchlater: state.watchlater,
        addMovieToFavorite,
        addMovieToWatchlater,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
