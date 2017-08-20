import * as ActionTypes from "./ActionTypes";
import * as API from "../utils/API";

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
