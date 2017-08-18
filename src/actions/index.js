import * as API from "../utils/API";
import * as ActionTypes from "../constants/ActionTypes";

export const routeChange = event => ({
  type: ActionTypes.ROUTE_CHANGE,
  event
});

export const requestUserInfo = userId => ({
  type: ActionTypes.REQUEST_USER_INFO,
  userId
});

export const receiveUserInfo = (userId, data) => ({
  type: ActionTypes.RECEIVE_USER_INFO,
  userId,
  data,
  receivedAt: Date.now()
});

const fetchUserInfo = userId => dispatch => {
  dispatch(requestUserInfo(userId));
  return API.fetchUser(userId)
    .then(response => response.data)
    .then(data => dispatch(receiveUserInfo(userId, data)));
};

const shouldFetchUserInfo = (state, userId) => {
  const user = state.users[userId];
  if (!user) {
    return true;
  }
  if (user.isFetching) {
    return false;
  }
  return false;
};

export const fetchUserInfoIfNeeded = userId => (dispatch, getState) => {
  if (shouldFetchUserInfo(getState(), userId)) {
    return dispatch(fetchUserInfo(userId));
  }
};
