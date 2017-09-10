import * as API from "../utils/API";
import * as ActionTypes from "./ActionTypes";
import { filter } from "lodash";
import { createHashTableFromArray } from "../utils/GeneralUtils";

export const fetchSchoolsRequest = () => ({
  type: ActionTypes.FETCH_SCHOOLS_REQUEST
});

export const fetchSchoolsSuccess = data => ({
  type: ActionTypes.FETCH_SCHOOLS_SUCCESS,
  receivedAt: Date.now(),
  data
});

export const fetchSchoolsFailure = error => ({
  type: ActionTypes.FETCH_SCHOOLS_FAILURE,
  error
});

const fetchSchools = () => dispatch => {
  dispatch(fetchSchoolsRequest());

  return API.fetchSchools()
    .then(response => {
      const data = createHashTableFromArray(response.data, "id");
      return dispatch(fetchSchoolsSuccess(data));
    })
    .catch(error => fetchSchoolsFailure(error));
};

export const fetchSchoolsIfNeeded = () => (dispatch, getState) => {
  const schools = getState().schools;
  const filtered = filter(schools, value => typeof value === "object");

  if (filtered.length === 0) {
    return dispatch(fetchSchools());
  }
};
