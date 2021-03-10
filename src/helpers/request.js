import axios from "axios";

const apiKey = "3dd4e9bd621e0b6c5f2c397e651e088a";
//https://api.themoviedb.org/3/movie/550?api_key=3dd4e9bd621e0b6c5f2c397e651e088a
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGQ0ZTliZDYyMWUwYjZjNWYyYzM5N2U2NTFlMDg4YSIsInN1YiI6IjYwNDc4Y2UyYzhhNWFjMDA1YTAwMGJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2_YSbNYsdXZ-1YaYN-6oEbDKcsXNYGdaNMQUo8HxC8

export const withCreadentials = (url) => {
  return `${url}api_key=${apiKey}`;
};

export const request = async (method, url, body) => {
  const result = await axios[method](url, body);
  return result.data;
};

export const createSingleUserUrl = (path) => {
  return withCreadentials(`https://api.github.com/users/${path}?`);
};


// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>