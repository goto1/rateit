import * as ActionTypes from "../actions/ActionTypes";

export const majorsReducer = (
  state = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_MAJORS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.FETCH_MAJORS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        receivedAt: action.receivedAt,
        ...action.data
      };
    case ActionTypes.FETCH_MAJORS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};
