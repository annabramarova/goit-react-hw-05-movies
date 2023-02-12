import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../utils/api/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Button, Form, Input } from './Searchbar.styled'

export const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const handleSubmit = e => {
        setSearchParams({ search: e.target[0].value });
        e.preventDefault();
        return;
    }

    useEffect(() => {
        const movieName = searchParams.get('search');
        if (movieName) {
            searchMovies(movieName).then(response => setMovies(response));
        }
    }, [searchParams]);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input type='text' />
                <Button type='submit'>Search</Button>
            </Form>
            <MoviesList movies={movies} />
        </div>
    )
}
