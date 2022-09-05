import { call, put } from "redux-saga/effects";
import { setUser } from "../../actions/userActions";
import userAPI from "../apirequest/userApi";
export default function* userHandler() {
  try {
    const response = yield call(userAPI);
    const user = response?.data;
    //   dispatch the data using PUT
    // console.log(user);
    yield put(setUser(user));
  } catch (e) {
    console.log(e);
  }
}
