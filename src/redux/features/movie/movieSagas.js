import { call, fork, put, takeEvery } from "redux-saga/effects";

import { fetchMovie, fetchMovies } from "./movieApi";
import { getMovie, getMovies, setMovie, setMovies } from "./movieSlice";

function* workerFetchMovies({ payload }) {
  try {
    const response = yield call(fetchMovies, payload);

    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchFetchMovies() {
  // action type
  yield takeEvery(getMovies.type, workerFetchMovies);
}

function* workerFetchMovie({ payload }) {
  try {
    const response = yield call(fetchMovie, payload);

    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchFetchMovie() {
  // action type
  yield takeEvery(getMovie.type, workerFetchMovie);
}

const movieSaga = [fork(watchFetchMovies), fork(watchFetchMovie)];

export default movieSaga;
