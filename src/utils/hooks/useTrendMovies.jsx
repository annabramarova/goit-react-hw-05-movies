import { getTrending } from '../api/fetchMovies';
import { useState, useEffect } from 'react';

export const useTrendMovies = () => {
    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {
        getTrending().then(response => setTrendMovies(response))
    }, []);

    return { trendMovies };
}