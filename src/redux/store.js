import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

//import root reducer and sags file here

const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const store = createStore("", applyMiddleware(...middlewareList));

export default store;
