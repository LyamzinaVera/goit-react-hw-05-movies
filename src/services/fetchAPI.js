import axios from 'axios';

const API_KEY = '368dd5813bc50c881ac17d574e13e11d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// Робота с backend

export async function fetchTrending() {
    try {
        const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}

export async function fetchFilteredMovies(query) {
    try {
        const response = await axios.get(
            `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}

export async function getMovieByID(id) {
    try {
        const response = await axios.get(
            `movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}

export async function getCastByID(id) {
    try {
        const response = await axios.get(
            `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}

export async function getReviewsByID(id) {
    try {
        const response = await axios.get(
            `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
        );
        return response.data;
    } catch (error) {
        new Error('Not Found');
    }
}