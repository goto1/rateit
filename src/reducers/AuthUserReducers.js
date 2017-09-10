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
        isFetching: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
        info: {
          ...action.data
        }
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        token: "",
        info: {}
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
        info: {
          ...state.info,
          bookmarks: [...state.info.bookmarks, action.data]
        }
      };
    case ActionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.error
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
        info: {
          ...state.info,
          bookmarks: [...state.info.bookmarks].filter(
            b => b.id !== action.userId
          )
        }
      };
    case ActionTypes.REMOVE_USER_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const authUserReducer = reduceReducers(authReducer, bookmarksReducer);
