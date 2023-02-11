import { getMovieDetails } from '../api/fetchMovies';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        getMovieDetails(movieId).then(data => setMovieDetails(data));
    }, [movieId]);

    return { movieDetails };
}