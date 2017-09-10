import * as API from "../utils/API";
import * as ActionTypes from "./ActionTypes";

/**
 * FETCH A SINGLE USER
 */

export const fetchUserRequest = userId => ({
  type: ActionTypes.FETCH_USER_REQUEST,
  userId
});

export const fetchUserSuccess = (userId, data) => ({
  type: ActionTypes.FETCH_USER_SUCCESS,
  receivedAt: Date.now(),
  data,
  userId
});

export const fetchUserFailure = (userId, error) => ({
  type: ActionTypes.FETCH_USER_FAILURE,
  userId,
  error
});

const fetchUser = userId => dispatch => {
  dispatch(fetchUserRequest(userId));

  return API.fetchUser(userId)
    .then(data => dispatch(fetchUserSuccess(data)))
    .catch(error => dispatch(fetchUserFailure(error)));
};

const shouldFetchUser = (state, userId) => {
  const user = state.users[userId];

  if (!user) {
    return true;
  }
  if (user.isFetching) {
    return false;
  }
  return false;
};

export const fetchUserIfNeeded = userId => (dispatch, getState) => {
  if (shouldFetchUser(getState(), userId)) {
    return dispatch(fetchUser(userId));
  }
};

/**
 * FETCH MULTIPLE USERS
 */

export const fetchUsersRequest = () => ({
  type: ActionTypes.FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = response => ({
  type: ActionTypes.FETCH_USERS_SUCCESS,
  receivedAt: Date.now(),
  data: response.data
});

export const fetchUsersFailure = error => ({
  type: ActionTypes.FETCH_USERS_FAILURE,
  error
});

const fetchUsers = options => dispatch => {
  dispatch(fetchUsersRequest());

  return API.fetchUsers(options)
    .then(response => dispatch(fetchUsersSuccess(response)))
    .catch(error => dispatch(fetchUsersFailure(error)));
};

const shouldFetchUsers = ({ users }) => {
  const EXPIRATION_MINS = 10;
  const lastFetched = users.receivedAt ? users.receivedAt : Date.now();
  const minsSinceLastFetch = Math.floor((Date.now() - lastFetched) / 60000);

  return EXPIRATION_MINS < minsSinceLastFetch ? false : true;
};

export const fetchUsersIfNeeded = options => (dispatch, getState) => {
  if (shouldFetchUsers(getState())) {
    return dispatch(fetchUsers(options));
  }
};
