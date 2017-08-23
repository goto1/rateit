import * as ActionTypes from "../actions/ActionTypes";

const users = (
  state = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.USER_INFO_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.USER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.data,
        lastUpdated: action.receivedAt
      };
    case ActionTypes.USER_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const usersInfo = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO_REQUEST:
    case ActionTypes.USER_INFO_SUCCESS:
    case ActionTypes.USER_INFO_FAILURE:
      return {
        ...state,
        [action.userId]: users(state[action.userId], action)
      };
    default:
      return state;
  }
};
