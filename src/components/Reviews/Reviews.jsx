import { useParams } from 'react-router-dom';
import { useMovieReviews } from 'utils/hooks/useMovieReviews';
import PropTypes from 'prop-types';
import {List} from '../App.styled'

const Reviews = () => {
    const { movieId } = useParams();
    const { movieReviews } = useMovieReviews(movieId);

    return (
        <div>
            {movieReviews?.length === 0 && (
                <p>We don't have any reviews at this moment</p>
            )}
            <List>
                {movieReviews.map(review => {
                    return (
                        <li key={review.id}>
                            <p><b>Author:</b> {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    );
                })}
            </List>
        </div>
    )
}

Reviews.propTypes = {
    movieId: PropTypes.string.isRequired
}

export default Reviews;