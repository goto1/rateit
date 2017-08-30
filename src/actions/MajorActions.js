import * as API from "../utils/API";
import * as ActionTypes from "./ActionTypes";

export const fetchMajorsRequest = () => ({
  type: ActionTypes.FETCH_MAJORS_REQUEST
});

export const fetchMajorsSuccess = data => ({
  type: ActionTypes.FETCH_MAJORS_SUCCESS,
  payload: data,
  receivedAt: Date.now()
});

export const fetchMajorsFailure = error => ({
  type: ActionTypes.FETCH_MAJORS_FAILURE,
  error
});

const fetchMajors = () => dispatch => {
  dispatch(fetchMajorsRequest());

  return API.fetchMajors()
    .then(response => response.data)
    .then(data => dispatch(fetchMajorsSuccess(data)))
    .catch(error => dispatch(fetchMajorsFailure(error)));
};

export const fetchMajorsIfNeeded = () => (dispatch, getState) => {
  const majors = getState().majors.all;

  if (majors.length === 0) {
    return dispatch(fetchMajors());
  }
};
