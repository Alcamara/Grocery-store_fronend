function* fetchProducts() {
  try {
    //const list = yield axios.get("list");
    //console.log(list.data);
  } catch (err) {
    console.log(`postForm err: ${err}`);
  }
}

function* productsSaga() {
  yield takeLatest("FETCH_PRODUCTS", fetchProducts);
}

module.exports = productsSaga;
