import apiKey from "./keys";
export default {
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchMysteryMovies: `/discover/movie?api_key=${apiKey}&with_genres=9648`,
  fetchScifiMovies: `/discover/movie?api_key=${apiKey}&with_genres=878`,
  fetchWesternMovies: `/discover/movie?api_key=${apiKey}&with_genres=37`,
  fetchAnimationMovies: `/discover/movie?api_key=${apiKey}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${apiKey}&with_genres=10770`,
};
