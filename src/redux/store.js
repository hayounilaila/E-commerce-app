import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleWare))(createStore)(
  rootReducer
);

sagaMiddleWare.run(rootSaga);

export default store;
