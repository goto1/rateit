import * as API from "../utils/API";
import * as ActionTypes from "./ActionTypes";
import { filter } from "lodash";
import { createHashTableFromArray } from "../utils/GeneralUtils";

export const fetchMajorsRequest = () => ({
  type: ActionTypes.FETCH_MAJORS_REQUEST
});

export const fetchMajorsSuccess = data => ({
  type: ActionTypes.FETCH_MAJORS_SUCCESS,
  receivedAt: Date.now(),
  data
});

export const fetchMajorsFailure = error => ({
  type: ActionTypes.FETCH_MAJORS_FAILURE,
  error
});

const fetchMajors = () => dispatch => {
  dispatch(fetchMajorsRequest());

  return API.fetchMajors()
    .then(response => {
      const data = createHashTableFromArray(response.data, "id");
      return dispatch(fetchMajorsSuccess(data));
    })
    .catch(error => dispatch(fetchMajorsFailure(error)));
};

export const fetchMajorsIfNeeded = () => (dispatch, getState) => {
  const majors = getState().majors;
  const filtered = filter(majors, value => typeof value === "object");

  if (filtered.length === 0) {
    return dispatch(fetchMajors());
  }
};
