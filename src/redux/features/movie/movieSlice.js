import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: {},
  movie: {},
};

const movieSlice = createSlice({
  name: "movie",

  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  // setting up 'reducers' & 'actions' at the same time
  // Key names will be used to generate actions
  reducers: {
    // note - helper function
    getMovies(name) {
      return name;
    },

    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },

    getMovie(id) {
      return id;
    },

    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

// Action Creators
export const { getMovies, setMovies, getMovie, setMovie } = movieSlice.actions;

export default movieSlice.reducer;
