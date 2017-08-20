import * as ActionTypes from "../actions/ActionTypes";

export const currentRoute = (
  state = {
    path: "/",
    mainPath: "/"
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ROUTE_CHANGE:
      return {
        ...state,
        ...action.route
      };
    default:
      return state;
  }
};
