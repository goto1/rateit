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

export const usersReducer = (
  state = { all: {}, isFetching: false },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_REQUEST:
    case ActionTypes.FETCH_USER_SUCCESS:
    case ActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        [action.userId]: user(state[action.userId], action), // DELETE
        all: {
          ...state.all,
          [action.userId]: user(state[action.userId], action)
        }
      };
    case ActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        receivedAt: action.receivedAt,
        all: {
          ...state.all,
          ...action.payload.data
        }
      };
    case ActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
};
