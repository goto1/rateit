import { combineReducers } from "redux";
import { routeReducer } from "./RouteReducers";
import { usersReducer } from "./UserReducers";
import { authUserReducer } from "./AuthUserReducers";

const rootReducer = combineReducers({
  route: routeReducer,
  users: usersReducer,
  authUser: authUserReducer
});

export default rootReducer;
