import React, { lazy, Suspense } from 'react'; //+
import { Routes, Route } from "react-router-dom";//+

import Container from "components/Container"; //+
import Bar from "components/Bar";
import Loader from 'components/Loader';

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
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId/*" element={<MovieDetailView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
