import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import movieReducer from "./features/movie/movieSlice";

// root saga
import rootSaga from "./rootSaga";

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// store configuration
const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  // Adding Saga middleware
  // middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  middleware: getDefaultMiddleware => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],

  // Disable Redux devTool in the prod environment
  devTools: process.env.NODE_ENV !== "production",
});

// NOTE: we are going to run & add in all our Sagas
sagaMiddleware.run(rootSaga);

export default store;
