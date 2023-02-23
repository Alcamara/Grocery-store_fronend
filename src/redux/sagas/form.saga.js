import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

function* postForm(action) {
  try {
    const list = yield axios.post("list", action.payload);
    console.log(list.data);
  } catch (err) {
    console.log(`postForm err: ${err}`);
  }
}

function* formSaga() {
  yield takeLatest("POST_FORM", postForm);
}

export default formSaga;
