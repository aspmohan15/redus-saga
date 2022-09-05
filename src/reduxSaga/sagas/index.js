import { takeLatest } from "redux-saga/effects";
import userHandler from "./handlers/userHandler"; 
export default function* sagaWatcher() {
  yield takeLatest("GET_USER_DATA", userHandler);
}
