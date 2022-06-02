import {Routes, Route } from "react-router-dom";

import Container from "components/Container";
import Bar from "components/Bar";

import HomeView from "views/HomeView";
import MoviesView from "views/MoviesView";
import NotFoundView from "views/NotFoundView/";

export default function App() {
  return (
    <Container>
      <Bar />      
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/movies" element={<MoviesView />}/>
        <Route path="*" element={<NotFoundView />}/>
      </Routes>      
    </Container>
  );
};
