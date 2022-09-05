import { combineReducers } from "redux";
import userReducer from "./useReducers";

export default combineReducers({
  user: userReducer,
});
