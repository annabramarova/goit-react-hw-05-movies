import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useMovieDetails } from '../../utils/hooks/useMovieDetails';
import { Loader } from 'components/Loader/Loader';
import { Preview, Img, SideBar, Button, Title, Genres, StyledLynk} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { movieDetails: { poster_path, original_title, release_date, title, vote_average, overview, genres } } = useMovieDetails(movieId);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    return (
        <div>
            <Link to={backLinkHref}>
                    {' '}
                    <Button type='button'>🠔 Go back</Button>
            </Link>
            <Preview>  
            <div>
                <Img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
            </div>
            <SideBar>
                <Title>{title} ({' '}{release_date ? release_date.slice(0, 4) : ''}{' '})</Title>
                <p>User Score:{' '}
                    {vote_average ? Math.round(vote_average * 10).toFixed(0) : ''}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <Genres>{genres?.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}</Genres>
            </SideBar>
            </Preview>
             <div>
                <p>Additional information</p>

                <ul>
                    <li>
                        <StyledLynk to='cast' state={{from: backLinkHref}}>Cast</StyledLynk>
                    </li>
                    <li>
                        <StyledLynk to='reviews' state={{from: backLinkHref}}>Reviews</StyledLynk>
                    </li>
                </ul>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
};

export default MovieDetailsPage;