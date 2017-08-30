import * as ActionTypes from "../actions/ActionTypes";

export const schoolsReducer = (
  state = {
    isFetching: false,
    all: []
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
        all: [...action.payload]
      };
    case ActionTypes.FETCH_SCHOOLS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
