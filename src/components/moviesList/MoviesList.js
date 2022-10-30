import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import DisplayCard from "../card/DisplayCard";

const MoviesList = () => {
  const { moviesList } = useSelector(state => state.movie);

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {moviesList?.Search?.map(item => {
        return (
          <Grid item key={item.imdbID} sm={6} md={3} flex="1">
            <DisplayCard id={item.imdbID} title={item.Title} image={item.Poster} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default MoviesList;
