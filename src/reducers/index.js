import { combineReducers } from "redux";
import { currentRoute } from "./RouteReducers";
import { usersInfo } from "./UserReducers";
import { authUser } from "./AuthUserReducers";

const rootReducer = combineReducers({
  currentRoute,
  users: usersInfo,
  currentUser: authUser
});

export default rootReducer;
