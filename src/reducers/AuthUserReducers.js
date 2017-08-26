import reduceReducers from "reduce-reducers";
import * as ActionTypes from "../actions/ActionTypes";

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  isEditing: false
};

/**
 * USER AUTHENTICATION
 */

const authReducer = (state = initialState, action) => {
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

/**
 * USER BOOKMARK FUNCTIONALITY
 */

const bookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER_REQUEST:
      return {
        ...state,
        isEditing: true
      };
    case ActionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        isEditing: false,
        bookmarks: [...state.bookmarks, action.payload]
      };
    case ActionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        isEditing: false,
        errorMessage: action.error.message
      };
    case ActionTypes.REMOVE_USER_REQUEST:
      return {
        ...state,
        isEditing: true
      };
    case ActionTypes.REMOVE_USER_SUCCESS:
      return {
        ...state,
        isEditing: false,
        bookmarks: [...state.bookmarks].filter(
          bookmark => bookmark.id !== action.payload.id
        )
      };
    case ActionTypes.REMOVE_USER_FAILURE:
      return {
        ...state,
        isEditing: false,
        errorMessage: action.error.message
      };
    default:
      return state;
  }
};

export const authUserReducer = reduceReducers(authReducer, bookmarksReducer);
