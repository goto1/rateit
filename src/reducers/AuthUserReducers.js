import * as ActionTypes from "../actions/ActionTypes";

export const authUser = (
  state = {
    isFetching: false,
    isAuthenticated: false,
    isEditing: false
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
    case ActionTypes.BOOKMARK_USER_REQUEST:
      return {
        ...state,
        isEditing: true
      };
    case ActionTypes.BOOKMARK_USER_SUCCESS:
      return {
        ...state,
        isEditing: false,
        bookmarks: [...state.bookmarks, action.payload]
      };
    case ActionTypes.BOOKMARK_USER_FAILURE:
      return {
        ...state,
        isEditing: false,
        errorMessage: action.error.message
      };
    default:
      return state;
  }
};
