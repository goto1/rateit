import * as ActionTypes from "./ActionTypes";
import * as API from "../utils/API";

/**
 * Authentication Functionality
 */

export const requestLogin = credentials => ({
  type: ActionTypes.LOGIN_REQUEST,
  credentials
});

export const receiveLogin = user => ({
  type: ActionTypes.LOGIN_SUCCESS,
  user
});

export const loginError = error => ({
  type: ActionTypes.LOGIN_FAILURE,
  error
});

export const loginUser = credentials => dispatch => {
  dispatch(requestLogin(credentials));

  return API.loginUser(credentials)
    .then(response => response.data)
    .then(user => dispatch(receiveLogin(user)))
    .catch(error => dispatch(loginError(error)));
};

export const requestLogout = () => ({
  type: ActionTypes.LOGOUT_REQUEST
});

export const receiveLogout = () => ({
  type: ActionTypes.LOGOUT_SUCCESS
});

export const logoutError = error => ({
  type: ActionTypes.LOGOUT_FAILURE,
  error
});

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  // TODO: cleanup
  dispatch(receiveLogout());
};

// reference
// https://auth0.com/blog/secure-your-react-and-redux-app-with-jwt-authentication/

/**
 * Bookmark Functionality
 */

export const bookmarkRequest = () => ({
  type: ActionTypes.BOOKMARK_USER_REQUEST
});

export const bookmarkSuccess = payload => ({
  type: ActionTypes.BOOKMARK_USER_SUCCESS,
  payload
});

export const bookmarkError = error => ({
  type: ActionTypes.BOOKMARK_USER_FAILURE,
  error
});

const bookmarkUser = (currUserId, userId) => dispatch =>
  API.bookmarkUser(currUserId, userId)
    .then(response => response.data)
    .then(data => dispatch(bookmarkSuccess(data)))
    .catch(err => dispatch(bookmarkError(err)));

const shouldBookmarkUser = (state, userId) => {
  const bookmarks = state.currentUser.bookmarks;
  const shouldBookmark =
    typeof bookmarks.find(user => user.id === userId) === "undefined";
  return shouldBookmark;
};

export const bookmarkUserIfNeeded = userId => (dispatch, getState) => {
  if (shouldBookmarkUser(getState(), userId)) {
    return dispatch(bookmarkUser(getState().currentUser.id, userId));
  }
};
