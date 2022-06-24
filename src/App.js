import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Container from "components/Container";
import Bar from "components/Bar";
import Loader from 'components/Loader';

// import HomeView from "views/HomeView";
// import MoviesView from "views/MoviesView";
// import NotFoundView from "views/NotFoundView";
// import MovieDetailView from "views/MovieDetailView";

const HomeView = lazy(() => import('./views/HomeView'));
const MoviesView = lazy(() => import('./views/MoviesView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));
const MovieDetailView = lazy(() => import('./views/MovieDetailView'));
 
export default function App() {
  return (
    <Container>
      <Bar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
