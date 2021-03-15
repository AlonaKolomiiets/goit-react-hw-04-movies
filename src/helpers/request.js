import axios from "axios";

const apiKey = "3dd4e9bd621e0b6c5f2c397e651e088a";
//https://api.themoviedb.org/3/movie/550?api_key=3dd4e9bd621e0b6c5f2c397e651e088a
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGQ0ZTliZDYyMWUwYjZjNWYyYzM5N2U2NTFlMDg4YSIsInN1YiI6IjYwNDc4Y2UyYzhhNWFjMDA1YTAwMGJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2_YSbNYsdXZ-1YaYN-6oEbDKcsXNYGdaNMQUo8HxC8

export const withCreadentials = (url) => {
  return `${url}api_key=${apiKey}`;
};

export const getPopularMovies = () =>
  axios.get(withCreadentials("https://api.themoviedb.org/3/trending/all/day?"));

export const getMovieDetails = (movieId) =>
  axios.get(withCreadentials(`https://api.themoviedb.org/3/movie/${movieId}?`));

export const getMovieDetailsCredits = (movieId) =>
  axios.get(
    withCreadentials(`https://api.themoviedb.org/3/movie/${movieId}/credits?`)
  );

export const getMovieDetailsReviews = (movieId) =>
  axios.get(
    withCreadentials(`https://api.themoviedb.org/3/movie/${movieId}/reviews?`)
  );

export const getMovieSearch = (query) =>
  axios.get(
    withCreadentials(
      `https://api.themoviedb.org/3/search/movie?query=${query}&`
    )
  );
