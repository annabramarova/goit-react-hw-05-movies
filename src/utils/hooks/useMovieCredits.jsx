import { getMovieCredits } from '../api/fetchMovies';
import { useState, useEffect } from 'react';

export const useMovieCredits = movieId => {
    const [movieCredits, setMovieCredits] = useState([]);

    useEffect(() => {
        getMovieCredits(movieId).then(data => setMovieCredits(data));
    }, [movieId]);

    return { movieCredits };
}