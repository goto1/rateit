import * as API from "../utils/API";
import * as ActionTypes from "./ActionTypes";

export const requestUserInfo = userId => ({
  type: ActionTypes.USER_INFO_REQUEST,
  userId
});

export const receiveUserInfo = (userId, data) => ({
  type: ActionTypes.USER_INFO_SUCCESS,
  userId,
  data,
  receivedAt: Date.now()
});

const fetchUser = userId => dispatch => {
  dispatch(requestUserInfo(userId));

  return API.fetchUser(userId)
    .then(response => response.data)
    .then(data => dispatch(receiveUserInfo(userId, data)))
    .catch(err => {
      // TODO: handle error
      // dispatch(failedUserInfoRequest(userId, err))
    });
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

export const fetchUserIfNeeded = userId => (dispatch, getState) => {
  if (shouldFetchUserInfo(getState(), userId)) {
    return dispatch(fetchUser(userId));
  }
};
