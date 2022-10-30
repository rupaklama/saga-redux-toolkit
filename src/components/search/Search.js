import { useState } from "react";

import { Alert, debounce, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../../redux/features/movie/movieSlice";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("superman");

  const { moviesList } = useSelector(state => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item sx={{ margin: "1rem 0" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            letterSpacing: "0.1rem",
            lineHeight: "1.25",
            marginBottom: "0.15rem",
            fontSize: "2rem",
          }}
        >
          Movie Search App
        </Typography>
      </Grid>

      {moviesList.Error && (
        <Grid item sx={{ marginBottom: "2rem", width: "40%" }}>
          <Alert variant="filled" severity="error">
            {moviesList?.Error || ""}
          </Alert>
        </Grid>
      )}

      <Grid item>
        <TextField
          sx={{ margin: "1rem 0" }}
          label="Search movies"
          variant="outlined"
          // fullWidth
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
          }}
        />
      </Grid>
    </Grid>
  );
};
export default Search;
