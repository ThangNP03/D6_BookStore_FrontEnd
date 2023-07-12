import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";
import createReduxMiddleware from 'redux-saga';
import { rootSaga } from "../saga";
//tao đối tượng ags của dói tượng 
const sagaMiddleware = createReduxMiddleware();
//tạo store và chaps nhận sagaMiddleware là middleware của saga
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
//chạy rootSaga để lọc cái action
sagaMiddleware.run(rootSaga)
export default store;