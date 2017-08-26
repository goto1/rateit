import * as API from "../utils/API";
import * as ActionTypes from "./ActionTypes";

export const fetchUserRequest = userId => ({
  type: ActionTypes.FETCH_USER_REQUEST,
  userId
});

export const fetchUserSuccess = (userId, data) => ({
  type: ActionTypes.FETCH_USER_SUCCESS,
  userId,
  data,
  receivedAt: Date.now()
});

export const fetchUserFailure = (userId, error) => ({
  type: ActionTypes.FETCH_USER_FAILURE,
  userId,
  error
});

const fetchUser = userId => dispatch => {
  dispatch(fetchUserRequest(userId));

  return API.fetchUser(userId)
    .then(response => response.data)
    .then(data => dispatch(fetchUserSuccess(userId, data)))
    .catch(err => dispatch(fetchUserFailure(userId, err)));
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
