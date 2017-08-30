import * as ActionTypes from "../actions/ActionTypes";

export const majorsReducer = (
  state = {
    isFetching: false,
    all: []
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
        all: [...action.payload]
      };
    case ActionTypes.FETCH_MAJORS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
