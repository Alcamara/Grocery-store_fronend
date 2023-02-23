import { put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

function* fetchProducts() {
  try {
    const products = yield axios.get("http://127.0.0.1:8000/products");
    console.log(products.data);
    yield put({type: "SET_PRODUCTS", payload: products.data })
  } catch (err) {
    console.log(`postForm err: ${err}`);
  }
}

function* productsSaga() {
  yield takeLatest("FETCH_PRODUCTS", fetchProducts);
}

export default productsSaga;
