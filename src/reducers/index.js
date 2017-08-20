import { combineReducers } from "redux";
import { currentRoute } from "./RouteReducers";
import { usersInfo } from "./UserReducers";
import { auth } from "./AuthReducers";

const rootReducer = combineReducers({
  currentRoute,
  users: usersInfo,
  currentUser: auth
});

export default rootReducer;
