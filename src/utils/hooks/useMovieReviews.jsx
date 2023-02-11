import { getMovieReviews } from '../api/fetchMovies';
import { useState, useEffect } from 'react';

export const useMovieReviews = movieId => {
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(movieId).then(data => setMovieReviews(data));
    }, [movieId]);

    return { movieReviews };
}