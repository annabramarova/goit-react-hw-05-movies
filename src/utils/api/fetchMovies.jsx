import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const KEY = '?api_key=65f73936914e96331bea5b0c7cf2b569';

export const getTrending = async () => {
    const res = await axios.get(`/trending/movie/day${KEY}`);
    return res.data.results.map(({ id, title })=> {
        return { id, title }
    })
};

export const searchMovies = async search => {
    const res = await axios.get(`/search/movie${KEY}&query=${search}&language=en-US&page=1`);
    return res.data.results.map(({ id, title })=>{
        return { id, title };
    })
}

export const getMovieDetails = async movieId => {
    const res = await axios.get(`/movie/${movieId}${KEY}&language=en-US`);
    return res.data;
}

export const getMovieCredits = async movieId => {
    const res = await axios.get(`/movie/${movieId}/credits${KEY}&language=en-US`);
    return res.data.cast.map(({ name, character, profile_path, id })=>{
        return { name, character, profile_path, id };
    })
}

export const getMovieReviews= async movieId => {
    const res = await axios.get(`/movie/${movieId}/reviews${KEY}&language=en-US&page=1`);
    return res.data.results.map(({ author, content, id })=>{
        return { author, content, id  };
    })
}