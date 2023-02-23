import { put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { act } from 'react-dom/test-utils';

function* fetchProducts() {
  try {
    const products = yield axios.get("http://127.0.0.1:8000/products");
    console.log(products.data);
    yield put({type: "SET_PRODUCTS", payload: products.data })
  } catch (err) {
    console.log(`postForm err: ${err}`);
  }
}


function* updateProduct(action) {
  console.log();
  try {
    const resp = yield axios.put("http://127.0.0.1:8000/product/"+action.payload.id, action.payload);
    console.log(resp);
    yield put({type: "FETCH_PRODUCTS"})
  } catch (err) {
    console.log(`postForm err: ${err}`);
  }
}



function* productsSaga() {
  yield takeLatest("FETCH_PRODUCTS", fetchProducts);
  yield takeLatest("UPDATE_PRODUCT", updateProduct);
}

export default productsSaga;
