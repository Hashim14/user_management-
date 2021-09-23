import { combineReducers } from "redux";
import { usersReducer } from "./userReducers";

const rootReducers = combineReducers({
  data: usersReducer,
});

export default rootReducers;
