import * as API from "../utils/API";
import * as ActionTypes from "./ActionTypes";

export const fetchSchoolsRequest = () => ({
  type: ActionTypes.FETCH_SCHOOLS_REQUEST
});

export const fetchSchoolsSuccess = data => ({
  type: ActionTypes.FETCH_SCHOOLS_SUCCESS,
  payload: data,
  receivedAt: Date.now()
});

export const fetchSchoolsFailure = error => ({
  type: ActionTypes.FETCH_SCHOOLS_FAILURE,
  error
});

const fetchSchools = () => dispatch => {
  dispatch(fetchSchoolsRequest());

  return API.fetchSchools()
    .then(response => response.data)
    .then(data => dispatch(fetchSchoolsSuccess(data)))
    .catch(error => dispatch(fetchSchoolsFailure(error)));
};

export const fetchSchoolsIfNeeded = () => (dispatch, getState) => {
  const allSchools = getState().schools.all;

  if (allSchools.length === 0) {
    return dispatch(fetchSchools());
  }
};
