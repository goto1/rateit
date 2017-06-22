import { combineReducers } from "redux";
import { ROUTE_CHANGE } from "../actions";

const currentPage = (state = "/", action) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      return action.route;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentPage
});

export default rootReducer;
