import * as ActionTypes from "../actions/ActionTypes";

export const auth = (
  state = {
    isFetching: false,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.credentials
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: "",
        ...action.user
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.error.message
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
