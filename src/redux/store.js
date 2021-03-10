/*import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);*/
import { compose, createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";

import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleWare))(createStore)(
  rootReducer
);

sagaMiddleWare.run(rootSaga);

export default store;
