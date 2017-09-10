import * as ActionTypes from "../actions/ActionTypes";

// TODO: rewrite the actions & reducers to eliminate the `all` property

const initialState = {
  isFetching: false
};

const user = (state = initialState, action) => {
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
        receivedAt: action.receivedAt,
        ...action.data
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

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_REQUEST:
    case ActionTypes.FETCH_USER_SUCCESS:
    case ActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        [action.userId]: user(state[action.userId], action)
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
        ...action.data
      };
    case ActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};
