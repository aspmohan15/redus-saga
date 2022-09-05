import { createStore, applyMiddleware } from "redux";
import reducer from "./reduxSaga/reducers";
import createSagaMiddleware from "redux-saga";
import sagaWatcher from "./reduxSaga/sagas";

const sagaMiddleware = createSagaMiddleware();
// console.log(sagaMiddleware);

const middlewares = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(sagaWatcher);

export default store;
