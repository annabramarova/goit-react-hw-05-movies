import { MoviesList } from 'components/MoviesList/MoviesList';
import { useTrendMovies } from '../../utils/hooks/useTrendMovies';
import { Title} from 'components/App.styled';
import { Fragment } from 'react';

const HomePage = () => {
    const { trendMovies } = useTrendMovies();

    return (
        <Fragment>
            <Title>Trending today</Title>
            <MoviesList movies={trendMovies} />
        </Fragment>
    )
}

export default HomePage;