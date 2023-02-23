import { combineReducers } from "redux";
import { product } from "./products.reducer";

const rootReducer = combineReducers({
  product,
});

export default rootReducer;
