import { combineReducers } from "redux";
import { ROUTE_CHANGE } from "../actions";
import { handleRouteChange } from "../utils/ReducerUtils";

const currentRoute = (state = { path: "/", mainPath: "/" }, action) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      return handleRouteChange(action.event, state);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentRoute
});

export default rootReducer;
