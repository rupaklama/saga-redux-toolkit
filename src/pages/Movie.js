import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import DisplayCard from "../components/card/DisplayCard";
import { getMovie } from "../redux/features/movie/movieSlice";

const Movie = () => {
  const { movie } = useSelector(state => state.movie);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [dispatch, id]);

  return <DisplayCard />;
};

export default Movie;
