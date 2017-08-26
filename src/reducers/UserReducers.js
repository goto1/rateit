import * as ActionTypes from "../actions/ActionTypes";

const user = (
  state = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.data,
        lastUpdated: action.receivedAt
      };
    case ActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_REQUEST:
    case ActionTypes.FETCH_USER_SUCCESS:
    case ActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        [action.userId]: user(state[action.userId], action)
      };
    default:
      return state;
  }
};
