import { useParams } from 'react-router-dom';
import { useMovieCredits } from 'utils/hooks/useMovieCredits'
import PropTypes from 'prop-types';
import {List} from '../App.styled'

const Cast = () => {
    const { movieId } = useParams();
    const { movieCredits } = useMovieCredits(movieId);

    return (
        <div>
            <List>
                {movieCredits.map(({id,profile_path, name, character }) => {
                    return (
                        <li key={id}>
                            <img width={100} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`}
                                alt={name} />
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                    )
                })}
            </List>
        </div>
    )
}

Cast.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default Cast;