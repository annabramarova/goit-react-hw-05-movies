import { searchMovies } from '../api/fetchMovies';
import { useState, useEffect } from 'react';

export const useSearchMovies = input => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies(input).then(response => setMovies(response));
    }, [input]);
    return { movies };
}