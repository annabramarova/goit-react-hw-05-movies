import { useLocation } from 'react-router-dom';
import { List, Movie } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
            <List>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Movie to={`/movies/${movie.id}`} state={{from: location}}>
                            {movie.title}
                        </Movie>
                    </li>)
                )}
            </List>
    )
}