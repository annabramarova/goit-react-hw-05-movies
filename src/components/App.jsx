import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Container } from 'components/App.styled';
import { NavBar } from './NavBar/NavBar';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));


export const App = () => {
  return (
    <Container>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </Container>
  );
};

