const API_KEY = import.meta.env.VITE_API_KEY;
const Base_URL = "https://api.themoviedb.org/3"

const ENDPOINTS = {
    POPULAR: `${Base_URL}/movie/popular?api_key=${API_KEY}`,
    NOW_PLAYING: `${Base_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOP_RATED: `${Base_URL}/movie/top_rated?api_key=${API_KEY}`
};

export default ENDPOINTS;