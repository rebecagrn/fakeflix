const API_KEY = "3f961a0431c1ab73e50e182b55de5c24";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchUrl = async (endpoint) => {
  const req = await fetch(`${BASE_URL}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originals",
        items: await fetchUrl(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Trending",
        items: await fetchUrl(`/trending/all/week?api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Action",
        items: await fetchUrl(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "fantasy",
        title: "Fantasy",
        items: await fetchUrl(
          `/discover/movie?with_genres=14&api_key=${API_KEY}`
        ),
      },
      {
        slug: "tvmovie",
        title: "TV Movie",
        items: await fetchUrl(
          `/discover/movie?with_genres=10770&api_key=${API_KEY}`
        ),
      },
      {
        slug: "western",
        title: "Western",
        items: await fetchUrl(
          `/discover/movie?with_genres=37&api_key=${API_KEY}`
        ),
      },
      {
        slug: "animation",
        title: "Animation",
        items: await fetchUrl(
          `/discover/movie?with_genres=16&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (type === "tv") {
      info = await fetchUrl(`/tv/${movieId}?api_key=${API_KEY}`);
    } else {
      info = await fetchUrl(`/movie/${movieId}?api_key=${API_KEY}`);
    }
    return info;
  },
};
