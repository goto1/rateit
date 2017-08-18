import { combineReducers } from "redux";
import * as ActionTypes from "../constants/ActionTypes";
import { handleRouteChange } from "../utils/ReducerUtils";

const currentRoute = (state = { path: "/", mainPath: "/" }, action) => {
  switch (action.type) {
    case ActionTypes.ROUTE_CHANGE:
      return handleRouteChange(action.event, state);
    default:
      return state;
  }
};

const users = (
  state = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.REQUEST_USER_INFO:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.RECEIVE_USER_INFO:
      return {
        ...state,
        isFetching: false,
        ...action.data,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

const usersInfo = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_USER_INFO:
    case ActionTypes.RECEIVE_USER_INFO:
      return {
        ...state,
        [action.userId]: users(state[action.userId], action)
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentRoute,
  users: usersInfo
});

export default rootReducer;
