import React from "react";
import MoviesList from "../components/moviesList/MoviesList";

import Search from "../components/search/Search";

const Home = () => {
  return (
    <>
      <Search />
      <MoviesList />
    </>
  );
};

export default Home;
