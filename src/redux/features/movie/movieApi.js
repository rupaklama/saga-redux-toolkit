import axios from "axios";

const API = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async movieName => axios.get(`${API}&s=${movieName}`);

export const fetchMovie = async movieId => axios.get(`${API}&i=${movieId}`);
