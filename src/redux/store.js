import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import rootReducer from "./reducers/_root.reducer";
import rootSaga from "./sagas/_root.saga";

const sagaMiddleware = createSagaMiddleware();

//import root reducer and sags file here

const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const store = createStore( rootReducer, applyMiddleware(...middlewareList));

sagaMiddleware.run(rootSaga)

export default store;
