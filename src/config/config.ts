// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL:string = "https://api.themoviedb.org/3/";
// const API_KEY:string | undefined = (process.env.TMDB_API_KEY as string);
const API_KEY:string | undefined = "22b7e0d43bef0676fb57c3a0a7076348";

const SEARCH_URL:string = `${API_URL}search/movie?api_key=${API_KEY}&language=pt-BR&query=`;
const POPULAR_URL:string = `${API_URL}movie/popular?api_key=${API_KEY}&language=pt-BR`;

const IMAGE_URL:string = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE:string = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE:string = "w780";

export {
  API_URL,
  API_KEY,
  SEARCH_URL,
  POPULAR_URL,
  IMAGE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
