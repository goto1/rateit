import * as API from "../utils/API";
import * as ActionTypes from "../constants/ActionTypes";
import isNil from "lodash/isNil";
import omitBy from "lodash/omitBy";
import { getComponentName, isMainPath } from "../utils/ActionUtils";

export const routeChange = route => ({
  type: ActionTypes.ROUTE_CHANGE,
  route
});

export const handleRouteChange = event => (dispatch, getState) => {
  const { currentRoute } = getState();
  const { params, path, query, route, url } = event;
  const updatedRoute = omitBy(
    {
      currentComponent: getComponentName(route, "component"),
      currentTab: getComponentName(route, "tab.component"),
      mainPath: isMainPath(route.path) ? route.path : currentRoute.mainPath,
      path,
      query: Object.keys(query)[0].length !== 0 ? query : {},
      url,
      userId: params.id || null
    },
    isNil
  );
  return dispatch(routeChange(updatedRoute));
};

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
