const axios = require('axios');
const KEY = 'd738edb014e8e3b583b9023797190025';
const URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies=()=> {
    const url = `${URL}trending/movie/day?api_key=${KEY}&page=${1}`;
    const resp = axios.get(url);
    return resp;
};

export function getSearchMovie (movie) {
    const url = `${URL}search/movie?api_key=${KEY}&query=${movie}`;
    const resp = axios.get(url);
    return resp;
};

export function getMovieById (movieId) {
    const url = `${URL}movie/${movieId}?api_key=${KEY}`;
    const resp = axios.get(url);
    return resp;
};

export function getCast(movieId) {
    const url = `${URL}movie/${movieId}/credits?api_key=${KEY}`;
    const resp = axios.get(url);
    return resp;
};

export function getReviews(movieId) {
    const url = `${URL}movie/${movieId}/reviews?api_key=${KEY}`;
    const resp = axios.get(url);
    return resp;
};
