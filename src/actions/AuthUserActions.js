import * as ActionTypes from "./ActionTypes";
import * as API from "../utils/API";

import { fetchUsersIfNeeded } from "./UserActions";

/**
 * AUTH FUNCTIONALITY
 */

export const requestLogin = () => ({
  type: ActionTypes.LOGIN_REQUEST
});

export const receiveLogin = data => ({
  type: ActionTypes.LOGIN_SUCCESS,
  data
});

export const loginError = error => ({
  type: ActionTypes.LOGIN_FAILURE,
  error
});

export const loginUser = credentials => dispatch => {
  dispatch(requestLogin(credentials));

  return API.loginUser(credentials)
    .then(user => {
      const schools = user.schools.map(school => school.id);
      dispatch(receiveLogin(user));
      dispatch(fetchUsersIfNeeded({ schools }));
    })
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
 * USER BOOKMARK FUNCTIONALITY
 */

export const addUserRequest = () => ({
  type: ActionTypes.ADD_USER_REQUEST
});

export const addUserSuccess = data => ({
  type: ActionTypes.ADD_USER_SUCCESS,
  data
});

export const addUserError = error => ({
  type: ActionTypes.ADD_USER_FAILURE,
  error
});

export const addUserToBookmarks = userId => (dispatch, getState) => {
  const authUser = getState().auth.info;

  dispatch(addUserRequest());

  return API.bookmarkUser(authUser.id, userId)
    .then(data => dispatch(addUserSuccess(data)))
    .catch(error => dispatch(addUserError(error)));
};

export const removeUserRequest = () => ({
  type: ActionTypes.REMOVE_USER_REQUEST
});

export const removeUserSuccess = deletedUserId => ({
  type: ActionTypes.REMOVE_USER_SUCCESS,
  userId: deletedUserId
});

export const removeUserError = error => ({
  type: ActionTypes.REMOVE_USER_FAILURE,
  error
});

export const removeUserFromBookmarks = userId => (dispatch, getState) => {
  const authUser = getState().auth.info;

  dispatch(removeUserRequest());

  return API.removeUser(authUser.id, userId)
    .then(() => dispatch(removeUserSuccess(userId)))
    .catch(error => dispatch(removeUserError(error)));
};
