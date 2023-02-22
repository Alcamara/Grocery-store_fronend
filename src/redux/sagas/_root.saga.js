import { all } from "redux-saga/effects";
import productsSaga from "./products.saga";
import formSaga from "./form.saga";

export default function* rootSaga() {
  yield all([productsSaga(), formSaga()]);
}
