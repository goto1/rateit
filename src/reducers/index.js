import { combineReducers } from "redux";
import { routeReducer } from "./RouteReducers";
import { usersReducer } from "./UserReducers";
import { authUserReducer } from "./AuthUserReducers";
import { schoolsReducer } from "./SchoolReducers";
import { majorsReducer } from "./MajorReducers";

const rootReducer = combineReducers({
  auth: authUserReducer,
  majors: majorsReducer,
  route: routeReducer,
  schools: schoolsReducer,
  users: usersReducer
});

export default rootReducer;
