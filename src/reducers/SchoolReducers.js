import * as ActionTypes from "../actions/ActionTypes";

export const schoolsReducer = (
  state = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_SCHOOLS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.FETCH_SCHOOLS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        receivedAt: action.receivedAt,
        ...action.data
      };
    case ActionTypes.FETCH_SCHOOLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};
