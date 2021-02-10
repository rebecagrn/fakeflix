export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVORITE":
      return {
        ...state,
        favorite: [action.payload, ...state.favorite],
      };
    case "ADD_MOVIE_TO_WATCHLATER":
      return {
        ...state,
        favorite: state.favorite.filter(
          (item) => item.id !== action.payload.id
        ),
        watchlater: [action.payload, ...state.watchlater],
      };
    default:
      return state;
  }
};
